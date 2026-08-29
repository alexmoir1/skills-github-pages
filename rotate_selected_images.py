from PIL import Image
import os

files = [
    'life-04-sketchbook-spread.jpg',
    'life-03-figure-study.jpg',
    'life-06-dance-ref-b.jpg',
    'figure-01-sketchbook.jpg',
    'figure-02-photo-ref.jpg',
    'character-03-hybrid-form.jpg',
    'portrait-02-mixed-medium.jpg',
    'portrait-03-gcse-final.jpg',
    'painting-01-flower.jpg',
    'painting-02-koi.jpg',
    'painting-04-unit1-final.jpg',
]

base = r'c:\Users\ali\OneDrive\Documents (Ali Home)\GitHub\GracePortfolio\images'
for name in files:
    path = os.path.join(base, name)
    img = Image.open(path)
    before = img.size
    rotated = img.rotate(-90, expand=True)
    rotated.save(path)
    print(f'{name}: {before} -> {rotated.size}')
