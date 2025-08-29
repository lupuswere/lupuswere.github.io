# Shamholee

A medieval-inspired scholarly website featuring markdown-driven content and automated deployment.

## ✨ Features

- **Medieval Design**: Clean, scholarly aesthetic inspired by illuminated manuscripts
- **Markdown Content**: Articles and notes written in markdown with frontmatter
- **Three-Column Layout**: Main article with left and right sidebar notes
- **Automated Deployment**: Push to master branch → automatic build and deploy
- **Static Generation**: Optimized for GitHub Pages hosting

## 📝 Content Management

All content lives in markdown files:

```
content/
├── articles/main-article.md    # Main article
└── notes/
    ├── left/note-*.md         # Left sidebar notes  
    └── right/note-*.md        # Right sidebar notes
```

Each file includes frontmatter:
```markdown
---
title: "Your Title"
date: "Dec 15, 2024"
author: "Your Name"
---

Your content here...
```

## 🚀 Quick Start

```bash
npm install
npm run dev    # Development server
npm run build  # Production build
```

## 🔄 Deployment

1. Edit markdown files in `content/`
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push: `git push origin master`
4. Site automatically rebuilds and deploys to `https://lupuswere.github.io`

## 🛠️ Technical Details

- **Framework**: Modern React-based static site generator
- **Content**: Markdown files with frontmatter
- **Styling**: Clean, responsive design
- **Deployment**: Automated via repository push