# GitHub Pages Deployment Setup

## Environment Variables (GitHub Secrets)

To deploy your CollegeCircle app to GitHub Pages, you need to add your environment variables as GitHub Secrets.

### Step 1: Add GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click on **Secrets and variables** → **Actions**
4. Click on **New repository secret**
5. Add the following secrets one by one:

#### Required Secrets:

**Secret Name:** `VITE_API_URL`  
**Value:** `https://clgcircle-server.onrender.com/api`

**Secret Name:** `VITE_SUPABASE_URL`  
**Value:** `https://mfapbcqfdoqwbpyedirv.supabase.co`

**Secret Name:** `VITE_SUPABASE_ANON_KEY`  
**Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mYXBiY3FmZG9xd2JweWVkaXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NzM4MjgsImV4cCI6MjA4NzI0OTgyOH0.Ri6k4eiVtZEMnY4Mx-E92EznR59WODdmuewmNZ25xPA`

### Step 2: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** in the left sidebar
3. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
4. Save the settings

### Step 3: Deploy

The deployment will trigger automatically when you push to the `main` branch.

You can also manually trigger the deployment:
1. Go to the **Actions** tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

### Step 4: Verify Deployment

Once the workflow completes:
- Your site will be available at: `https://collegecircle.app` (custom domain)
- Or at: `https://yourusername.github.io/collegecircle/` (default GitHub Pages URL)

## Custom Domain Setup

Since you have a CNAME file with `collegecircle.app`, make sure to:

1. Configure your DNS settings at your domain provider:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

2. In GitHub Settings → Pages, add your custom domain `collegecircle.app`

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
1. Checkout your code
2. Setup Node.js
3. Install dependencies
4. Build your app with environment variables from GitHub Secrets
5. Deploy the built files to GitHub Pages

## Troubleshooting

- **Build fails:** Check the Actions tab for error messages
- **Environment variables not working:** Verify all secrets are added correctly
- **404 errors:** Make sure GitHub Pages source is set to "GitHub Actions"
- **Custom domain issues:** Check DNS settings and GitHub Pages custom domain configuration

## Security Note

The `.env` file is in `.gitignore` and should NEVER be committed to the repository. Always use GitHub Secrets for sensitive data.
