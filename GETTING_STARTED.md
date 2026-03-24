# Getting Started with PhageDB Knowledge Base

Welcome! This guide will help you get the site running and understand how to contribute.

## Quick Start (2 minutes)

### 1. Start the development server

```bash
cd phage-database-guide
npm run dev
```

Open http://localhost:3000 in your browser.

### 2. Make your first edit

Try editing the homepage:
- Open `app/page.tsx`
- Change the hero text
- Save and watch the page auto-reload

### 3. Add a database review

Copy the BFVD template:
```bash
cp content/databases/bfvd.md content/databases/my-database.md
```

Edit the metadata and content, then your new database will be ready to display.

## Project Structure Explained

```
phage-database-guide/
├── app/
│   ├── page.tsx           # Homepage (what you see at /)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── content/               # All content is here
│   ├── databases/         # Database reviews
│   │   ├── bfvd.md       # Example: BFVD review
│   │   └── phagescope.md # Example: PhageScope review
│   ├── guides/           # How-to guides
│   │   └── ml-training-data.md
│   └── news/             # Updates (coming soon)
│
├── public/               # Static files (images, etc.)
└── README.md            # Main documentation
```

## Adding Content

### Adding a Database Review

1. **Copy the template:**
   ```bash
   cp content/databases/bfvd.md content/databases/your-db-name.md
   ```

2. **Edit the frontmatter** (top of file between `---`):
   ```yaml
   ---
   name: YourDB
   full_name: Your Database Full Name
   version: "1.0"
   last_updated: "2026-03"
   url: "https://yourdb.org"
   data_types:
     - genomes
     - proteins
   # ... etc
   ---
   ```

3. **Fill in the sections:**
   - Overview
   - Data Composition
   - Data Quality (this is important!)
   - Use Cases (what it's good for / not good for)
   - Researcher Experience (real-world tips)
   - etc.

4. **Preview your changes:**
   The dev server will auto-reload when you save.

### Adding a Guide

1. **Create a new markdown file:**
   ```bash
   touch content/guides/your-guide-name.md
   ```

2. **Add frontmatter:**
   ```yaml
   ---
   title: "Your Guide Title"
   category: machine-learning
   difficulty: beginner
   last_updated: "2026-03"
   tags:
     - relevant-tag
   ---
   ```

3. **Write your guide** using markdown.

## Markdown Tips

You can use standard markdown plus:

```markdown
# Heading 1
## Heading 2

**Bold text**
*Italic text*

- Bullet list
1. Numbered list

[Link text](https://url.com)

| Table | Header |
|-------|--------|
| Row   | Data   |

```code blocks```
```

## Next Steps

### To deploy (free on Vercel):

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Deploy (takes ~2 minutes)

Your site will be live at `https://your-project.vercel.app`

### To add more features:

Check the roadmap in README.md for planned features:
- Database search and filtering
- Comparison tools
- Newsletter system
- etc.

## Common Tasks

### Run locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run build && npm run start
```

### Check for TypeScript errors
```bash
npx tsc --noEmit
```

## Need Help?

- Check README.md for full documentation
- Look at existing database reviews as examples
- Open an issue on GitHub

## Tips for Good Database Reviews

1. **Be honest about limitations** - researchers need to know what WON'T work
2. **Include real numbers** - "90% unannotated" is more useful than "mostly unannotated"
3. **Share your experience** - what surprised you? What took longer than expected?
4. **Update regularly** - databases change, reviews should too
5. **Think about use cases** - help people decide if this database fits their needs

## Example Workflow

Here's how you might contribute a review of IMG/VR:

1. **Research the database:**
   - Visit the website
   - Download sample data
   - Check documentation
   - Note what works/doesn't work

2. **Copy the template:**
   ```bash
   cp content/databases/bfvd.md content/databases/imgvr.md
   ```

3. **Fill in your findings:**
   - Update metadata
   - Write honest assessment
   - Include practical tips
   - Add quality ratings

4. **Preview locally:**
   ```bash
   npm run dev
   ```

5. **Share:**
   - Commit your changes
   - Push to GitHub
   - Open a pull request

That's it! You've helped other researchers save time.

---

**Questions?** Open an issue or check the main README.md
