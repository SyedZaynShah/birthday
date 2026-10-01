# Hero Section - Editorial Design Documentation

## Overview

A sophisticated, luxury editorial hero section for Maheen's 22nd birthday website. The design mimics a private correspondence/personal dossier with high-end fashion editorial aesthetics.

## Design Philosophy

- **Restrained luxury through typography and spacing**
- **Editorial/magazine cover aesthetic**
- **Private correspondence feel**
- **Minimal decoration, maximum impact**
- **Sophisticated color palette**
- **Cinematic animations**

## Key Features

### 1. Typography Hierarchy
- **Eyebrow**: "SUBJECT: MAHEEN" (small caps, muted)
- **Main title**: "MAHEEN" (172px max, Cormorant Garamond serif)
- **Age**: "22." (72px max, maroon accent)
- **Personal joke**: Understated sans-serif
- **CTA**: Refined uppercase link with animated arrow

### 2. Color System
- Background: `#F7F3ED` (ivory)
- Primary maroon: `#641C2D`
- Navy: `#101C35`
- Deep navy: `#091224`
- Body text: `#2A2930`
- Muted text: `#817B78`

### 3. Botanical Illustration
- **Elegant SVG flowers**: lily, rose, tulips
- **Realistic/refined styling** (not cartoon)
- **Subtle floating animation** (7s loop)
- **Positioned right side** (partial frame entry)
- **Color harmony**: maroon rose, ivory lily, burgundy tulips, dark green leaves

### 4. Editorial Metadata
- Top-left: "PRIVATE CORRESPONDENCE"
- Top-right: "OCTOBER 02 / 2026"
- Bottom-left: "FILE 01 / 05"
- Bottom-right: "EST. 2004"
- Bottom-center: Scroll indicator

### 5. Animations
- **Entrance sequence** (0-2s):
  - Header fades in
  - Typography cascades upward
  - Flowers reveal from right
- **Idle state**:
  - Extremely subtle flower floating
  - Scroll indicator movement
- **Hover interactions**:
  - CTA arrow slides right
  - Underline extends
- **Accessibility**: Respects `prefers-reduced-motion`

### 6. Responsive Design
- **Desktop**: Asymmetrical composition (content left of center)
- **Tablet**: Adjusted spacing, 35vw flowers
- **Mobile**: Vertical optimization, 42vw flowers
- **Min width**: 390px optimized

## Technical Implementation

### Files Modified
1. `components/HeroModule.tsx` - Main hero component with animations
2. `app/globals.css` - Complete styling system

### Dependencies Used
- **Framer Motion** - Sophisticated animations
- **Google Fonts** - Cormorant Garamond serif
- **React hooks** - State management

### Performance
- SVG botanical illustration (lightweight)
- CSS transforms (GPU accelerated)
- Font preloading via Google Fonts
- Paper texture via inline SVG data URI

## Design Tokens

```css
/* Typography Scale */
--hero-label: 11px
--hero-eyebrow: 11px
--hero-title: clamp(88px, 12vw, 172px)
--hero-age: clamp(42px, 5vw, 72px)
--hero-joke: 14px
--hero-cta: 12px
--hero-meta: 9px

/* Spacing */
--header-padding: 48px 56px
--content-margin-left: 11vw
--title-line-height: 0.82
--age-margin-top: 20px
--joke-margin-top: 16px
--cta-margin-top: 28px
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- Framer Motion animations
- SVG support
- CSS custom properties

## Accessibility
- Semantic HTML structure
- Keyboard navigable CTA
- Reduced motion support
- Readable contrast ratios
- Screen reader friendly markup

## Future Sections
This hero section is designed to transition smoothly into subsequent sections. The ivory background and editorial style should continue throughout the site for visual cohesion.

---

**Design Goal Achieved**: "This isn't a birthday template. Someone made this specifically for Maheen."
