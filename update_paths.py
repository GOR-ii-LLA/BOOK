import os
import glob

OLD_PATH = r"C:\Users\Work\Downloads\Yandex.Disk\[CLAUDE]\[PROJECTS]\BOOK"
NEW_PATH = r"C:\ILYA\[Projects]\BOOK"
ENCODINGS = ["utf-8", "utf-8-sig", "cp1251", "latin-1"]

SEARCH_PATTERNS = ["*.py", "*.sh", "*.md"]

def find_all_files(root="."):
    found = set()
    for pattern in SEARCH_PATTERNS:
        for f in glob.glob(os.path.join(root, "**", pattern), recursive=True):
            found.add(f)
    return found

def replace_in_file(filepath):
    for enc in ENCODINGS:
        try:
            with open(filepath, "r", encoding=enc) as f:
                content = f.read()
            if OLD_PATH in content:
                new_content = content.replace(OLD_PATH, NEW_PATH)
                with open(filepath, "w", encoding=enc) as f:
                    f.write(new_content)
                return enc
        except (UnicodeDecodeError, PermissionError):
            continue
    return None

if __name__ == "__main__":
    root = os.path.dirname(os.path.abspath(__file__))
    files = find_all_files(root)

    changed = []
    for filepath in sorted(files):
        enc = replace_in_file(filepath)
        if enc:
            changed.append((filepath, enc))

    if changed:
        print(f"✅ Замены сделаны в {len(changed)} файлах:")
        for f, enc in changed:
            print(f"   {f}  [{enc}]")
    else:
        print("⚠️  Старый путь не найден ни в одном файле.")
        print("\nДиагностика — ищу CONTEXT.md:")
        for f in files:
            if "CONTEXT" in f:
                print(f"   Найден: {f}")
                for enc in ENCODINGS:
                    try:
                        with open(f, "r", encoding=enc) as fh:
                            content = fh.read()
                        hits = content.count("Work")
                        print(f"   [{enc}] слово 'Work' встречается {hits} раз")
                        break
                    except:
                        print(f"   [{enc}] — ошибка чтения")
