# Isabella Huber - Personal Website

Professional website for Isabella Huber, Senior Channel Account Manager.

## 🚀 Deploy via GitHub + Cloudflare Pages

### Step 1: Push to GitHub

```bash
cd /Users/isabellahuber/CascadeProjects/2048/Website/isabellahuber-website
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/isabella-website.git
git push -u origin main
```

### Step 2: Get Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click **"Create Token"**
3. Use template **"Cloudflare Pages"** or create custom:
   - **Zone:Read** for your domain
   - **Page:Edit** for deployment
4. Copy the token

### Step 3: Add GitHub Secrets

In your GitHub repo, go to **Settings → Secrets and variables → Actions**:

Add these secrets:
- `CLOUDFLARE_API_TOKEN` - Your API token from Step 2
- `CLOUDFLARE_ACCOUNT_ID` - From Cloudflare dashboard right sidebar

### Step 4: Deploy

Push any change to `main` branch - GitHub Actions will automatically deploy to Cloudflare Pages!

Your site will be live at: `isabellateresahuber.de`

## 📝 Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
```

## 📁 Project Structure

- `src/App.jsx` - Main website content
- `src/index.css` - Styles
- `public/` - Static images
- `.github/workflows/deploy.yml` - Auto-deployment config

