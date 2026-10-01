# Quick Start Guide 🚀

Get the birthday website running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Photos (Optional but Recommended)

1. Add 3 photos to `/public/images/`:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`

2. Uncomment the Image component in `/components/PhotoArchive.tsx` (line ~80)

## Step 3: Customize Content

Edit `/lib/content.ts` to personalize all text:

```typescript
export const content = {
  birthday: {
    date: "02.10.2026",
    age: 22,
    recipient: "Maheen",
  },
  // ... edit other sections as needed
};
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Test the Experience

1. Click "Open your birthday gift →" to open the envelope
2. Scroll through all sections:
   - ✅ Birthday intro
   - ✅ Flower bouquet
   - ✅ Memory cards
   - ✅ Photo gallery
   - ✅ Birthday letter
   - ✅ Birthday cake reveal

3. Test on mobile:
   - Press F12 to open dev tools
   - Click device toolbar icon
   - Test iPhone, iPad, Android sizes

## Step 6: Build for Production

```bash
npm run build
npm run start
```

Site will run on [http://localhost:3000](http://localhost:3000)

## Step 7: Deploy (Choose One)

### Option A: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click Deploy
5. Done! Share your URL

### Option B: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git
4. Deploy!

### Option C: Share Locally
If you just want to show on your computer:
```bash
npm run dev
```
Then share your screen or let them browse on your device.

## Common Issues

### "Cannot find module..."
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
```bash
# Kill the process using port 3000, or run on different port:
npm run dev -- -p 3001
```

### Images not showing
- Check files are in `/public/images/`
- Check file names match exactly: `photo1.jpg` not `Photo1.jpg`
- Uncomment Image component in PhotoArchive.tsx

### Site looks weird on mobile
- Clear browser cache
- Check responsive classes in components
- Test with device toolbar in browser dev tools

## Next Steps

- **Customize design**: See `CUSTOMIZATION.md`
- **Deploy online**: See `DEPLOYMENT.md`
- **Understand code**: Check `README.md`

## File Structure Overview

```
maheen-birthday/
├── app/
│   ├── page.tsx          ← Main page
│   ├── layout.tsx        ← HTML wrapper
│   └── globals.css       ← Global styles
├── components/           ← All UI components
├── lib/
│   └── content.ts        ← ⭐ EDIT THIS for text changes
├── public/
│   └── images/           ← ⭐ ADD PHOTOS HERE
└── README.md             ← Full documentation
```

## Support

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

**That's it! You're ready to create a beautiful birthday gift.** 🎉

Need help? Check the other guide files:
- `README.md` - Full project documentation
- `CUSTOMIZATION.md` - How to customize everything
- `DEPLOYMENT.md` - How to deploy online
