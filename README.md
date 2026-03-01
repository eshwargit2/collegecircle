# CollegeCircle

A social platform for college students built with React and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eshwargit2/collegecircle.git
cd collegecircle
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your Supabase credentials.

4. Run the development server:
```bash
npm run dev
```

## 🌐 Deployment

### GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Configure GitHub Secrets**
   - Go to your repository on GitHub
   - Navigate to: `Settings` → `Secrets and variables` → `Actions`
   - Click `New repository secret` and add the following:
     - `VITE_SUPABASE_URL`: Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
     - `VITE_API_URL`: Your API URL (optional)

2. **Enable GitHub Pages**
   - Go to: `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`

3. **Deploy**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Visit: https://collegecircle.app

### Custom Domain (collegecircle.app)
The CNAME file is configured for the custom domain `collegecircle.app`. Configure your DNS settings:
- Add an A record pointing to GitHub Pages IPs
- Or add a CNAME record pointing to `eshwargit2.github.io`

## 📁 Project Structure

```
collegecircle/
├── src/
│   ├── components/     # React components
│   ├── context/        # Context providers
│   ├── hooks/          # Custom hooks
│   ├── lib/            # API and utility functions
│   ├── pages/          # Page components
│   └── assets/         # Static assets
├── public/             # Public assets
└── .github/
    └── workflows/      # GitHub Actions workflows
```

## 🛠️ Technologies

- React 19
- Vite 7
- Tailwind CSS 4
- Supabase
- React Router
- Axios
