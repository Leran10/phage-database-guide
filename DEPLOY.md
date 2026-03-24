# Deployment Guide

Your code is now on GitHub at: **https://github.com/Leran10/phage-database-guide**

Now let's make it accessible to everyone on the web!

## Option 1: Vercel (Recommended - Easiest & Free)

Vercel is built by the Next.js team and offers the best deployment experience.

### Steps (5 minutes):

1. **Go to Vercel**: https://vercel.com/signup

2. **Sign up with GitHub** (use the same account)

3. **Import your repository**:
   - Click "Add New" → "Project"
   - Find "phage-database-guide" in your repo list
   - Click "Import"

4. **Deploy**:
   - Keep all default settings
   - Click "Deploy"
   - Wait ~2 minutes

5. **Done!** Your site will be live at:
   - `https://phage-database-guide.vercel.app`
   - Or a custom domain if you configure one

### Features You Get (Free):
- Automatic deployments on every git push
- Global CDN for fast loading
- HTTPS/SSL certificate
- Preview deployments for branches
- Analytics (optional)

### Cost:
- **FREE** for personal projects
- Unlimited bandwidth
- No credit card required

---

## Option 2: GitHub Pages (Alternative)

GitHub Pages is also free but requires more setup for Next.js.

### Steps:

1. **Update next.config.ts** to add base path:
   ```typescript
   const nextConfig = {
     output: 'export',
     basePath: '/phage-database-guide',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Create GitHub Actions workflow**:
   ```bash
   mkdir -p .github/workflows
   ```

3. **Add deployment workflow** (file at `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Pages section
   - Source: "gh-pages" branch
   - Save

5. **Push changes and wait for deployment**

Your site will be at: `https://leran10.github.io/phage-database-guide`

### Limitations:
- Slower than Vercel
- No automatic preview deployments
- More complex setup
- Images need to be unoptimized

---

## Option 3: Netlify (Alternative)

Similar to Vercel:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Import repository
4. Deploy

Site will be at: `https://phage-database-guide.netlify.app`

---

## Recommended: Use Vercel

**Why Vercel is best for this project:**
- Zero configuration needed
- Made by Next.js team
- Fastest performance
- Best developer experience
- 100% free for your use case

---

## After Deployment

### Share Your Site

Once deployed, you can share:
- Direct link: `https://phage-database-guide.vercel.app`
- GitHub repo: https://github.com/Leran10/phage-database-guide

### Future Updates

To update your site:
```bash
# Make changes to your files
git add .
git commit -m "Update database reviews"
git push
```

Vercel will automatically redeploy in ~2 minutes!

### Add a Custom Domain (Optional)

If you want `phagedb.com` instead of `*.vercel.app`:

1. Buy a domain (Google Domains, Namecheap, etc.)
2. In Vercel dashboard: Settings → Domains
3. Add your domain
4. Update DNS records as instructed
5. Done!

Cost: ~$12/year for domain

---

## Next Steps

1. **Deploy to Vercel** (recommended, 5 minutes)
2. **Test your live site**
3. **Share with colleagues**
4. **Get feedback**
5. **Add more database reviews**
6. **Update via git push**

---

## Need Help?

- **Vercel docs**: https://vercel.com/docs
- **Next.js deployment**: https://nextjs.org/docs/deployment
- **Issues**: Open an issue on GitHub

---

## Summary

**Easiest path to get your site live:**

1. Go to https://vercel.com/signup
2. Sign in with GitHub
3. Import "phage-database-guide"
4. Click Deploy
5. Done! Site is live

That's it! 🎉
