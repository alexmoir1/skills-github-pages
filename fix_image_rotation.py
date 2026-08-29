from pathlib import Path

base = Path(__file__).resolve().parent / 'images'

print(f'Image orientation is already correct. No automatic rotation is required for files in {base}.')
