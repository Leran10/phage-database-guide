# Quick Start for Next Session

## 📍 You Are Here

**Live Site**: https://leran10.github.io/phage-database-guide/
**GitHub**: https://github.com/Leran10/phage-database-guide

**Status**: 14 databases reviewed, ~25 more to add (see DATABASE_CATALOG.md)

---

## 🚀 Quick Commands

```bash
# Navigate to project
cd /Users/leranwang/Documents/github_projects/phageDB/phage-database-guide

# Start dev server
npm run dev
# Then open http://localhost:3000

# Add a new database review
cp content/databases/bfvd.md content/databases/newdb.md
# Edit the file, then:
git add content/databases/newdb.md
git commit -m "Add NewDB review"
git push
# Site updates automatically in ~2 minutes
```

---

## 📋 What to Do Next

### Option 1: Add More Databases (High Priority)

Next 10 to add (from DATABASE_CATALOG.md):
1. AlphaFold DB
2. InterPro
3. DRAM-v
4. GPD (Gut Phage Database)
5. MGV (Metagenomic Gut Virus)
6. CRISPRdb
7. CheckV
8. VirSorter2
9. eggNOG
10. KEGG Viruses

**Template to use**: `content/databases/bfvd.md` or any existing review

### Option 2: Set Up Automation

Create GitHub Action to monitor for new databases:
- File: `.github/workflows/monitor-databases.yml`
- See ROADMAP.md for details

### Option 3: Improve Homepage

Update `app/page.tsx` to:
- Dynamically read all databases from `content/databases/`
- Add search/filter functionality
- Show all 14+ databases (currently shows only 2)

---

## 📂 Key Files to Reference

| File | Purpose |
|------|---------|
| **PROJECT_STATUS.md** | Complete status - EVERYTHING documented here |
| **DATABASE_CATALOG.md** | Lists ALL 35+ phage databases and review status |
| **ROADMAP.md** | Long-term vision and phases |
| **CONTRIBUTING.md** | How to write database reviews |
| **content/databases/bfvd.md** | Example review to copy as template |

---

## 🎯 Immediate Next Steps

1. **Read PROJECT_STATUS.md** - Complete overview of what's done and planned

2. **Check DATABASE_CATALOG.md** - See which databases need reviews

3. **Add 1-2 databases** - Practice the workflow:
   ```bash
   cp content/databases/bfvd.md content/databases/alphafold.md
   # Edit, commit, push
   ```

4. **View live site** - Check how it looks: https://leran10.github.io/phage-database-guide/

---

## 💡 Tips

- Each database review is just a markdown file in `content/databases/`
- Copy an existing review as template (e.g., bfvd.md)
- Focus on honest assessment: strengths AND limitations
- Include real numbers: "162K proteins" not "many proteins"
- Push to GitHub → site auto-updates in ~2 minutes

---

## 🆘 If Something Breaks

1. **Site not updating?**
   - Check GitHub Actions: https://github.com/Leran10/phage-database-guide/actions
   - Wait 2-3 minutes after push
   - Hard refresh browser (Cmd+Shift+R)

2. **Dev server not starting?**
   ```bash
   cd phage-database-guide
   npm install  # Re-install if needed
   npm run dev
   ```

3. **Git issues?**
   - Status: `git status`
   - What changed: `git diff`
   - Undo changes: `git checkout -- file.md`

---

## 📊 Current Stats

- ✅ 14 databases reviewed
- 📋 35+ databases catalogued
- 🎯 Target: 40+ database reviews
- 🌐 Live site: Deployed and accessible
- 👥 Community: Contribution system ready

---

**Start Here**: Read PROJECT_STATUS.md for full context, then pick a database from DATABASE_CATALOG.md to review!
