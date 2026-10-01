# Photo Gallery Instructions

## Adding Your Photos

Place your photos in this directory with the following names:

- `photo1.jpg` - Will display with caption: "She took 47 photos to get this one."
- `photo2.jpg` - Will display with caption: "Apparently this is photography. I wouldn't know."
- `photo3.jpg` - Will display with caption: "Evidence that she actually knows what she's doing."

## Supported Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Recommendations

- **Size**: 800x800px to 1200x1200px (square format works best)
- **Orientation**: Square or portrait
- **File size**: Under 2MB per photo for fast loading

## After Adding Photos

1. Open `/components/PhotoArchive.tsx`
2. Uncomment the `<Image>` component (lines around 80-85)
3. Comment out or remove the placeholder div

The photos will then appear in the Polaroid-style frames on the website!

## Custom Captions

To change the photo captions, edit `/lib/content.ts` and modify the `gallery.photos` array.
