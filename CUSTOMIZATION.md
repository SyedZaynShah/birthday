# Customization Guide

This guide explains how to customize the birthday website for Maheen.

## Quick Edits

### Change All Text Content

Edit `/lib/content.ts` - this is the central configuration file for all text:

```typescript
export const content = {
  birthday: {
    date: "02.10.2026",        // Change the date
    age: 22,                   // Change the age
    recipient: "Maheen",       // Change the name
  },
  
  envelope: {
    // Edit envelope text...
  },
  
  // ... more sections
};
```

### Add Photos

1. Place photos in `/public/images/`:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`

2. Edit `/components/PhotoArchive.tsx`:
   - Uncomment the `<Image>` component (around line 80)
   - Remove or comment the placeholder div

3. Customize captions in `/lib/content.ts`:
```typescript
gallery: {
  photos: [
    {
      src: "/images/photo1.jpg",
      caption: "Your custom caption here"
    },
    // ...
  ]
}
```

## Style Customizations

### Colors

Edit `/tailwind.config.ts` and `/app/globals.css`:

```css
:root {
  --navy: #071A2B;      /* Main dark color */
  --maroon: #5B1825;    /* Accent color */
  --ivory: #F7F2EA;     /* Background */
  --white: #FFFFFF;     /* Pure white */
  --green: #566B5A;     /* Foliage */
}
```

### Fonts

Change fonts in `/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Your Serif Font', serif;
}
```

## Component Customizations

### Envelope Section

Edit `/components/Envelope.tsx`:

- Change background color: `bg-navy` → `bg-maroon`
- Modify envelope style: edit the container classes
- Adjust animation timing: change `delay` values in `transition` props

### Bouquet Section

Edit `/components/Bouquet.tsx`:

**Change flowers:**
- Find the SVG groups for each flower type
- Modify colors, positions, sizes
- Add or remove flower elements

**Adjust animations:**
```typescript
animate={{ y: [0, -5, 0] }}  // Change movement range
transition={{ 
  duration: 3,     // Change speed
  repeat: Infinity // Keep looping
}}
```

### Memory Cards

Edit `/components/MemoryCards.tsx`:

**Add more cards:**
```typescript
{
  title: "New Memory",
  text: "Your custom text here."
}
```

**Change layout:**
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` → adjust column count
- Modify `gap-6 md:gap-8` for spacing

### Birthday Letter

Edit `/components/BirthdayLetter.tsx`:

- Content comes from `/lib/content.ts`
- Modify styling: change padding, colors, borders
- Adjust decorative corners: edit absolute positioned divs

### Birthday Cake

Edit `/components/BirthdayCake.tsx`:

**Change candle count:**
```typescript
{[...Array(22)].map((_, i) => {  // Change 22 to desired number
```

**Modify cake colors:**
- Find fill colors in the SVG
- Replace with your preferred colors

## Animation Customizations

### Global Animation Speed

Edit individual components' `transition` props:

```typescript
transition={{ 
  duration: 0.8,  // Slower/faster
  delay: 0.3,     // Start later
  ease: "easeOut" // Animation curve
}}
```

### Disable Animations

If someone prefers reduced motion, animations automatically respect:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

To fully disable, remove `motion.` from components and use regular HTML tags.

## Responsive Breakpoints

Adjust breakpoints in Tailwind classes:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```typescript
className="text-base md:text-lg lg:text-xl"
```

## Add New Sections

1. Create new component in `/components/`:

```typescript
// components/NewSection.tsx
"use client";

import { motion } from "framer-motion";

export default function NewSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Add to `/app/page.tsx`:

```typescript
import NewSection from "@/components/NewSection";

// Inside the return:
<NewSection />
```

## Advanced Customizations

### Add Background Music

1. Add audio file to `/public/`
2. Create music player component:

```typescript
"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (playing) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={toggle}>
        {playing ? "🔊" : "🔇"}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
```

### Add Confetti Effect

Install package:
```bash
npm install react-confetti
```

Use in components:
```typescript
import Confetti from 'react-confetti';

<Confetti
  width={window.innerWidth}
  height={window.innerHeight}
  numberOfPieces={100}
  recycle={false}
/>
```

### Add Counter/Timer

Show time until/since birthday:

```typescript
const [timeLeft, setTimeLeft] = useState("");

useEffect(() => {
  const birthday = new Date("2026-10-02");
  const interval = setInterval(() => {
    const now = new Date();
    const diff = birthday.getTime() - now.getTime();
    // Calculate and format time difference
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

## Testing Changes

After any customization:

1. **Development mode:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

2. **Production build:**
   ```bash
   npm run build
   npm run start
   ```

3. **Test on mobile:**
   - Open dev tools (F12)
   - Toggle device toolbar
   - Test various screen sizes

## Common Issues

### Spacing looks off
- Check padding/margin classes
- Verify responsive breakpoints
- Test on actual devices

### Animation glitches
- Reduce animation complexity
- Check for conflicting animations
- Verify Framer Motion syntax

### Colors don't match
- Check both Tailwind config AND CSS variables
- Ensure hex codes are correct
- Test in different browsers

### Content overflows
- Add appropriate container widths: `max-w-4xl mx-auto`
- Use responsive text sizes: `text-base md:text-lg`
- Add horizontal padding: `px-4 md:px-8`

## Best Practices

1. **Keep it simple** - Don't overcomplicate the design
2. **Test mobile first** - Most people will view on phones
3. **Optimize images** - Compress photos before adding
4. **Maintain consistency** - Use the same spacing/sizing patterns
5. **Preview changes** - Always test before deploying

## Need Inspiration?

- [Awwwards](https://www.awwwards.com/) - Web design inspiration
- [Dribbble](https://dribbble.com/) - UI/UX inspiration
- [Coolors](https://coolors.co/) - Color palette generator
- [Google Fonts](https://fonts.google.com/) - Free fonts

---

Have fun customizing! 🎨
