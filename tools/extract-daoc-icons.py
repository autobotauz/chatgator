"""
Build a DAoC icon map for chatGator.

Pipeline the game client uses:
  spell effect id --(spells.csv "Icon")--> icon id
  style id        --(styles.csv "Icon")--> icon id
  icon id         --(icons.csv)----------> baseIconId + borderId + 7 corner/edge glyphs
  baseIconId      --> 32x32 tile in icons/<prefix>_<hundreds>.bmp  (10x10 grid, row-major)
  borderId        --> row 0 of icons/brdr_0.bmp (32bpp, alpha)
  glyph values    --> 10x10 tiles in icons/wgsm_0.bmp (32bpp, alpha)

Skins: "new" = <game>/icons/*.bmp, "classic" = <game>/icons/classic/*.bmp
(missing classic sheets fall back to new).

Usage: python extract_icons.py "C:\\Program Files (x86)\\Electronic Arts\\Dark Age of Camelot" out
"""
import sys, os, re, io, csv, json, zlib, struct
from PIL import Image

GAME = sys.argv[1] if len(sys.argv) > 1 else r"C:\Program Files (x86)\Electronic Arts\Dark Age of Camelot"
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "out")

# ---------- MPK (gamedata.mpk) ----------
def read_mpk(path):
    """Returns {filename_lower: bytes}. MPAK = name stream, directory stream, then one zlib stream per file."""
    d = open(path, "rb").read()
    streams, i = [], 0
    while i < len(d) - 1:
        if d[i] == 0x78 and d[i + 1] in (0x01, 0x5E, 0x9C, 0xDA):
            try:
                z = zlib.decompressobj()
                r = z.decompress(d[i:])
                streams.append(r)
                i = len(d) - len(z.unused_data)
                continue
            except zlib.error:
                pass
        i += 1
    dirr = streams[1]
    n = len(dirr) // 0x11C
    files = {}
    for k in range(n):
        e = dirr[k * 0x11C:(k + 1) * 0x11C]
        name = e[:256].split(b"\0")[0].decode("latin1")
        size = struct.unpack("<I", e[256 + 12:256 + 16])[0]
        data = streams[2 + k]
        if len(data) != size:  # fall back to size match
            data = next((s for s in streams[2:] if len(s) == size), data)
        files[name.lower()] = data
    return files

def rows(blob):
    return list(csv.reader(io.StringIO(blob.decode("latin1"))))

def num(s, default=-1):
    s = (s or "").strip().rstrip(";")
    return int(s) if re.fullmatch(r"-?\d+", s) else default

# ---------- BMP helpers ----------
def load_rgba(path):
    """PIL drops 32bpp BMP alpha; read it by hand."""
    d = open(path, "rb").read()
    off = struct.unpack("<I", d[10:14])[0]
    w, h = struct.unpack("<ii", d[18:26])
    bpp = struct.unpack("<H", d[28:30])[0]
    if bpp != 32:
        return Image.open(path).convert("RGBA")
    im = Image.frombuffer("RGBA", (w, abs(h)), d[off:off + w * abs(h) * 4], "raw", "BGRA", 0, -1 if h > 0 else 1)
    return im.copy()

def find_sheets(folder):
    out = {}
    if not os.path.isdir(folder):
        return out
    for f in os.listdir(folder):
        m = re.fullmatch(r"(spl|cbt|wpn|itm|skl)_(\d+)\.bmp", f, re.I)
        if m:
            out[int(m.group(2))] = os.path.join(folder, f)
    return out

def main():
    icons_dir = os.path.join(GAME, "icons")
    mpk = read_mpk(os.path.join(GAME, "gamedata.mpk"))
    os.makedirs(OUT, exist_ok=True)

    # icons.csv
    icon_defs = {}
    POS = ["upLeft", "up", "upRight", "right", "downRight", "down", "left"]
    for r in rows(mpk["icons.csv"])[2:]:
        if not r or num(r[0]) < 0:
            continue
        r += [""] * (12 - len(r))
        icon_defs[num(r[0])] = {
            "name": r[1].strip(),
            "base": num(r[2], 0),
            "border": num(r[3]),
            "glyphs": {p: num(v) for p, v in zip(POS, r[4:11]) if num(v) >= 0},
            "spell": num(r[11]),
        }

    # spells.csv: effect id -> icon id
    effects = {}
    for r in rows(mpk["spells.csv"]):
        if r and num(r[0]) >= 0 and len(r) > 2:
            effects[num(r[0])] = {"name": r[1].strip(), "icon": num(r[2], 0)}

    # styles.csv: style id -> icon id
    styles = {}
    for r in rows(mpk["styles.csv"])[2:]:
        if r and num(r[0]) >= 0 and len(r) > 2:
            styles[num(r[0])] = {"name": r[1].strip(), "icon": num(r[2], 0)}

    new_sheets = find_sheets(icons_dir)
    skins = {"new": new_sheets, "classic": {**new_sheets, **find_sheets(os.path.join(icons_dir, "classic"))}}
    borders = load_rgba(os.path.join(icons_dir, "brdr_0.bmp"))
    glyphs = load_rgba(os.path.join(icons_dir, "wgsm_0.bmp"))
    GPOS = {"upLeft": (0, 0), "up": (11, 0), "upRight": (22, 0), "right": (22, 11),
            "downRight": (22, 22), "down": (11, 22), "left": (0, 11)}

    ids = sorted(icon_defs)
    COLS = 64
    for skin, sheets in skins.items():
        cache = {}
        def base_tile(b):
            sheet = b // 100 * 100
            if sheet not in sheets:
                return None
            if sheet not in cache:
                cache[sheet] = Image.open(sheets[sheet]).convert("RGBA")
            i = b % 100
            return cache[sheet].crop(((i % 10) * 32, (i // 10) * 32, (i % 10) * 32 + 32, (i // 10) * 32 + 32))
        tile_dir = os.path.join(OUT, skin)
        os.makedirs(tile_dir, exist_ok=True)
        atlas = Image.new("RGBA", (COLS * 32, (len(ids) // COLS + 1) * 32), (0, 0, 0, 0))
        missing = []
        for n, iid in enumerate(ids):
            dfn = icon_defs[iid]
            t = base_tile(dfn["base"])
            if t is None:
                missing.append(iid)
                continue
            if 0 <= dfn["border"] < 10:
                t.alpha_composite(borders.crop((dfn["border"] * 32, 0, dfn["border"] * 32 + 32, 32)))
            for p, g in dfn["glyphs"].items():
                if g * 10 + 10 <= glyphs.width:
                    t.alpha_composite(glyphs.crop((g * 10, 0, g * 10 + 10, 10)), GPOS[p])
            t.save(os.path.join(tile_dir, f"{iid}.png"))
            atlas.paste(t, ((n % COLS) * 32, (n // COLS) * 32))
        atlas.save(os.path.join(OUT, f"atlas_{skin}.png"))
        print(skin, "icons:", len(ids) - len(missing), "missing base sheet:", len(missing))

    icon_map = {str(i): {**icon_defs[i],
                         "file": f"{i}.png",
                         "atlas": [(n % COLS) * 32, (n // COLS) * 32]}
                for n, i in enumerate(ids)}
    json.dump(icon_map, open(os.path.join(OUT, "icon_map.json"), "w"), indent=1)
    json.dump({str(k): v for k, v in sorted(effects.items())}, open(os.path.join(OUT, "spell_effects.json"), "w"), indent=1)
    json.dump({str(k): v for k, v in sorted(styles.items())}, open(os.path.join(OUT, "styles.json"), "w"), indent=1)
    print("icons", len(icon_map), "effects", len(effects), "styles", len(styles), "->", OUT)

if __name__ == "__main__":
    main()
