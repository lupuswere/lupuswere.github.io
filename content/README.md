# Content Management

This directory contains all the markdown content for your medieval-style website.

## 📁 Directory Structure

```
content/
├── articles/
│   └── main-article.md     # The main article displayed on the homepage
└── notes/
    ├── left/               # Notes displayed in the left sidebar
    │   ├── note-01.md
    │   ├── note-02.md
    │   └── ...
    └── right/              # Notes displayed in the right sidebar
        ├── note-01.md
        ├── note-02.md
        └── ...
```

## ✍️ Writing Content

### Article Format (`articles/main-article.md`)

```markdown
---
title: "Your Article Title"
author: "Your Name"
date: "December 15, 2024"
excerpt: "A brief description of your article"
---

# Your Article Title

Your article content here...
```

### Note Format (`notes/left/` or `notes/right/`)

```markdown
---
title: "Note Title"
date: "Dec 15, 2024"
---

**Latin phrase if desired**

Your note content here. Keep it concise and thoughtful.
```

## 🎨 Styling Guidelines

### For Medieval Aesthetic:
- Use classical/Latin phrases when appropriate
- Write in contemplative, philosophical tone
- Reference traditional scholarly concepts
- Keep notes brief but profound

### Examples:
- **Sapientia vincit omnia** (Wisdom conquers all)
- **Scripta manent** (Written words endure)
- **Docendo discimus** (By teaching, we learn)

## 🔄 Adding New Content

### To add a new note:
1. Create a new `.md` file in `content/notes/left/` or `content/notes/right/`
2. Use the naming pattern: `note-XX.md` (they load in alphabetical order)
3. Include frontmatter with title and date
4. Write your content
5. Commit and push to trigger deployment

### To change the main article:
1. Edit `content/articles/main-article.md`
2. Update the frontmatter and content
3. Commit and push

## 📝 Markdown Features Supported

- **Headers** (`#`, `##`, `###`)
- **Emphasis** (`*italic*`, `**bold**`)
- **Lists** (ordered and unordered)
- **Blockquotes** (`> text`)
- **Links** (`[text](url)`)
- **Code** (inline and blocks)

## 🚀 Deployment

After making changes:
1. `git add .`
2. `git commit -m "Update content"`
3. `git push origin master`

Your changes will automatically appear on the live site within a few minutes!
