# Deployment Guide

This guide will help you deploy the birthday website so Maheen can access it online.

## Quick Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and offers the smoothest deployment experience.

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Your Code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Maheen's birthday website"
   ```
   
   Create a new repository on GitHub and push:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to vercel.com/new
   - Import your repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! You'll get a URL like: `maheen-birthday.vercel.app`

4. **Custom Domain (Optional)**
   - Buy a domain from Namecheap, GoDaddy, etc.
   - Add it in Vercel project settings
   - Follow Vercel's DNS configuration steps

### Option 2: Netlify (Also Free)

1. Create account at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy!

### Option 3: Self-Hosting with PM2

If you have your own server:

1. **Install Node.js and PM2**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Upload Your Project**
   ```bash
   scp -r maheen-birthday user@your-server:/var/www/
   ```

3. **Build and Start**
   ```bash
   cd /var/www/maheen-birthday
   npm install
   npm run build
   pm2 start npm --name "maheen-birthday" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Before Deploying

### Add Your Photos
Make sure to add Maheen's photos to `/public/images/` before deploying:
- photo1.jpg
- photo2.jpg
- photo3.jpg

### Customize Content
Review and edit `/lib/content.ts` to personalize all messages.

### Test Locally
```bash
npm run build
npm run start
```

Visit http://localhost:3000 to ensure everything works.

## Environment Variables

This project doesn't require any environment variables, but if you add features later (like analytics), you can set them in:

**Vercel**: Project Settings → Environment Variables
**Netlify**: Site Settings → Environment Variables

## Custom Domain Tips

1. **Privacy**: Consider domain privacy protection to hide your contact info
2. **HTTPS**: Vercel/Netlify automatically provide free SSL certificates
3. **Short URL**: Pick something memorable like `maheen22.com` or `happy-birthday-maheen.com`

## Sharing the Website

Once deployed, you can:
- Share the URL directly
- Create a QR code pointing to the site
- Send it in a message on her birthday

## Monitoring

### Vercel Analytics (Free)
- Enable in Vercel dashboard
- See visitor stats, performance metrics

### Google Analytics (Free)
Add to `/app/layout.tsx`:
```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Troubleshooting

### Build Fails
- Check all images are properly placed
- Run `npm run build` locally first
- Check the build logs for specific errors

### Site is Slow
- Optimize images (use WebP format, compress to <500KB)
- Check Vercel/Netlify region settings
- Enable caching headers

### 404 Errors
- Ensure build output directory is correct (.next for Next.js)
- Check that all file paths use relative imports

## Cost

**Free Options:**
- Vercel: Unlimited personal projects, free SSL, global CDN
- Netlify: 100GB bandwidth/month free, free SSL
- GitHub Pages: Free static hosting (requires export setup)

**Paid Options:**
- Custom domain: $10-15/year
- Vercel Pro (if you need more): $20/month
- VPS hosting: $5-10/month

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Docs: https://docs.netlify.com

---

Happy deploying! 🚀
