# 🎉 Welcome to Maheen's Birthday Website!

## What You Have

A beautiful, polished, production-ready birthday website for Maheen's 22nd birthday.

**Everything is ready to go.** Just follow these 3 simple steps:

---

## Step 1: Install & Run ⚡

Open your terminal in this folder and run:

```bash
npm install
npm run dev
```

Open your browser to: **http://localhost:3000**

Click through the entire experience to see it!

---

## Step 2: Add Photos 📸

1. Add 3 photos to `/public/images/`:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`

2. Open `/components/PhotoArchive.tsx`

3. Find this section (around line 80):
   ```typescript
   {/* Actual image - uncomment and replace when you add real photos */}
   {/* <Image
     src={photo.src}
     alt={`Maheen photo ${index + 1}`}
     fill
     className="object-cover"
   /> */}
   ```

4. Remove the `{/* */}` to uncomment it

---

## Step 3: Customize Text (Optional) ✏️

All text is in one file: `/lib/content.ts`

Edit anything you want to personalize further!

---

## Deploy Online 🚀

When ready to share:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Maheen's birthday website"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com/new
   - Import your repository
   - Click Deploy
   - Share the URL with Maheen! 🎉

---

## 📚 Need More Help?

We've created detailed guides for everything:

- **QUICKSTART.md** - 5-minute setup guide
- **README.md** - Complete documentation
- **CUSTOMIZATION.md** - How to customize colors, fonts, layout
- **DEPLOYMENT.md** - Detailed deployment options
- **PROJECT_OVERVIEW.md** - Full project overview

---

## ✅ Pre-Launch Checklist

Before sharing with Maheen:

- [ ] Website runs on your computer (`npm run dev`)
- [ ] Added 3 personal photos
- [ ] Reviewed all text in content.ts
- [ ] Tested on mobile (press F12, click device icon)
- [ ] Built production version (`npm run build`)
- [ ] Deployed online
- [ ] Tested the live URL
- [ ] Ready to share on October 2nd! 🎂

---

## 🎨 What's Included

✨ **Envelope opening animation** with elegant reveal
🌷 **Beautiful flower bouquet** with tulips, lilies, roses
💝 **5 memory cards** with personal inside jokes
📸 **Photo gallery** with Polaroid-style frames
💌 **Heartfelt letter** in handwritten style
🎂 **Interactive cake** with 22 animated candles
📱 **Fully responsive** - looks great on phones!

---

## 🎯 The Experience

1. **Envelope** - Click to open
2. **Greeting** - "Happy 22nd, Maheen"
3. **Bouquet** - Beautiful flowers with card
4. **Memories** - Funny + sweet cards
5. **Photos** - Your personal gallery
6. **Letter** - Heartfelt birthday message
7. **Cake** - Click "One last thing..." for surprise

**Total time: 2-3 minutes of pure joy** 🌷

---

## 💻 Tech Stack

- Next.js 15 (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

All modern, production-ready, optimized!

---

## 🆘 Quick Troubleshooting

**"Cannot find module" error:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Photos not showing:**
- Check file names match exactly: `photo1.jpg`
- Files must be in `/public/images/`
- Uncomment Image component in PhotoArchive.tsx

---

## 🎁 Final Tips

- **Test on mobile first** - that's where Maheen will likely see it
- **Deploy a day early** - give yourself time to test the live version
- **Share on her birthday** - timing is everything!
- **Keep it secret** - don't spoil the surprise 🤫

---

**You're all set! This is going to make her birthday special.** 🌷

Start with: `npm install` then `npm run dev`

---

*Built with love for Maheen's 22nd birthday*

*"Under all the yapping, terrible jokes, photography lectures and mathematical suffering, you're genuinely one of the nicest people I've met."*
