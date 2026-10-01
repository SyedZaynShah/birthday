# 🌷 Happy 22nd Birthday, Maheen

> *A beautiful, personal birthday website created as a digital gift*

<div align="center">

**[Quick Start](#quick-start)** • **[Features](#features)** • **[Customization](#customization)** • **[Deployment](#deployment)**

</div>

---

## ✨ What Is This?

A polished, production-ready birthday website featuring:
- 🎭 Elegant envelope opening animation
- 🌷 Hand-crafted SVG flower bouquet
- 💝 Personal memory cards with inside jokes
- 📸 Polaroid-style photo gallery
- 💌 Heartfelt birthday letter
- 🎂 Interactive cake with 22 candles

**No generic templates. No cheesy effects. Just elegant, personal, and memorable.**

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
npm run start
```

## Adding Photos

To personalize the photo gallery:

1. Add your photos to `/public/images/` with these names:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`

2. The photos will automatically appear in the gallery section

3. You can use any image format (jpg, png, webp)

## Customizing Content

All text content is centralized in `/lib/content.ts` for easy editing:

- Birthday details (date, age, recipient)
- Envelope message
- Intro text
- Bouquet card text
- Memory cards content
- Photo captions
- Birthday letter
- Cake section text

Simply edit the content in this file to personalize the messages.

## Features

- ✨ Elegant envelope opening animation
- 🌷 Beautiful SVG flower bouquet with gentle animations
- 💐 Personal memory cards with hover effects
- 📸 Photo gallery with Polaroid-style frames
- 💌 Handwritten-style birthday letter
- 🎂 Interactive birthday cake with 22 candles
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Refined color palette (Navy, Maroon, Ivory)
- ⚡ Built with Next.js, TypeScript, Tailwind CSS, Framer Motion

## Color Palette

- **Deep Navy**: #071A2B
- **Maroon**: #5B1825
- **Warm Ivory**: #F7F2EA
- **White**: #FFFFFF
- **Muted Green**: #566B5A

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```
maheen-birthday/
├── app/
│   ├── page.tsx           # Main page with all sections
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Envelope.tsx       # Opening envelope animation
│   ├── BirthdayIntro.tsx  # Initial greeting
│   ├── Bouquet.tsx        # Flower bouquet centerpiece
│   ├── MemoryCards.tsx    # Memory cards section
│   ├── PhotoArchive.tsx   # Photo gallery
│   ├── BirthdayLetter.tsx # Personal letter
│   └── BirthdayCake.tsx   # Final cake interaction
├── lib/
│   └── content.ts         # All editable content
└── public/
    └── images/            # Add photos here
```

## Notes

- The website is designed to be viewed primarily on mobile
- All animations respect `prefers-reduced-motion`
- Images are optional - the layout works with placeholders
- All content is easily editable through the content.ts file

---

Made with 🌷 for Maheen's 22nd Birthday
