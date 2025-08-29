# lupuswere.github.io

A Next.js website with automated deployment to GitHub Pages.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Static Site Generation** for GitHub Pages compatibility
- **Automated Deployment** via GitHub Actions
- **Modern Development Experience** with hot reloading and fast builds

## 📁 Project Structure

```
├── .github/workflows/   # GitHub Actions workflows
├── src/app/            # Next.js App Router pages
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🛠️ Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Test static export:**
   ```bash
   npm run export
   ```

## 🚦 Deployment Workflow

1. **Push to master branch** - Any commit to the `master` branch triggers deployment
2. **GitHub Actions builds** - The workflow automatically builds the Next.js app
3. **Static export** - Next.js generates static files in the `out/` directory
4. **Deploy to GitHub Pages** - Files are deployed to the `gh-pages` branch
5. **Live site** - Available at `https://lupuswere.github.io`

## ⚙️ Configuration

### Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Enable static export
  trailingSlash: true,     // GitHub Pages compatibility
  images: {
    unoptimized: true      // Required for static export
  }
};
```

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Triggers on push to `master` branch
- Uses Node.js 18
- Caches dependencies and build artifacts
- Deploys to GitHub Pages automatically

## 📦 Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **ESLint** - Code linting

## 🔧 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run export` - Build and export static files
- `npm run start` - Start production server (not used for GitHub Pages)
- `npm run lint` - Run ESLint

## 📝 Notes

- The `public/.nojekyll` file ensures GitHub Pages serves all files correctly
- Images are unoptimized since Next.js Image Optimization requires a server
- The site uses static generation for all pages to work with GitHub Pages