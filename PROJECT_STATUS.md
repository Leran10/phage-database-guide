# PhageDB Knowledge Base - Project Status

**Last Updated**: March 24, 2026
**Project Goal**: Create a comprehensive, dynamically-updated guide to ALL phage databases

---

## 🎉 What's Been Completed

### ✅ Core Infrastructure (100% Done)

1. **Next.js Website**
   - Location: `/phage-database-guide/`
   - Framework: Next.js 15 with TypeScript and Tailwind CSS
   - Deployed: https://leran10.github.io/phage-database-guide/
   - Auto-deployment: GitHub Actions (updates on every push)

2. **GitHub Repository**
   - URL: https://github.com/Leran10/phage-database-guide
   - Public and accessible
   - Version controlled

3. **Homepage**
   - Professional design
   - Database cards
   - Browse by category
   - Mobile-friendly, dark mode support

### ✅ Database Reviews (14 Completed)

**Primary/Source Databases:**
1. ✅ **BFVD** - AlphaFold viral protein structures (162K phage proteins)
2. ✅ **UniProt** - Gold standard protein annotations (SwissProt + TrEMBL)
3. ✅ **VOGDB** - Virus Orthologous Groups (~400K VOGs)
4. ✅ **NCBI Viral Genomes** - Authoritative genome repository (~15K phages)
5. ✅ **IMG/VR** - Metagenomic viruses (15M+ sequences)
6. ✅ **Pfam** - Protein domain families (20K+ families)
7. ✅ **PDB** - Experimental protein structures (~5K phage structures)
8. ✅ **InPhared** - Consistently annotated phage genomes (14K+)
9. ✅ **PHASTER** - Prophage finding tool (web service)
10. ✅ **MillardLab** - Experimental phage-host interactions (10K+ pairs)
11. ✅ **PhagesDB** - Actinobacteriophages (30K+ phages)
12. ✅ **Pharokka** - Modern phage annotation pipeline
13. ✅ **Prophage-DB** - Comprehensive prophage database (356K sequences)
14. ✅ **PhageScope** - Aggregator (873K sequences from 10+ databases)

**Each review includes:**
- Overview and key statistics
- Data quality assessment (strengths AND limitations)
- Use cases (good for / not good for)
- Access information (URL, API, download)
- Real-world tips and researcher experience
- Citations where available

### ✅ Content & Guides

1. **ML Training Data Guide** (`content/guides/ml-training-data.md`)
   - Finding quality training data for phage protein ML models
   - Real examples from phage-qbio-poc project
   - Step-by-step workflows
   - Quality checklist

2. **Database Catalog** (`DATABASE_CATALOG.md`)
   - Lists ALL 35+ phage databases
   - Organized by type (genomes, proteins, structures, etc.)
   - Tracks review status
   - Quick reference for what exists

### ✅ Documentation

1. **README.md** - Project overview and getting started
2. **GETTING_STARTED.md** - Quick start for contributors
3. **CONTRIBUTING.md** - Detailed contribution guidelines
4. **ROADMAP.md** - Vision and phases for comprehensive coverage
5. **DEPLOY.md** - Deployment instructions
6. **PROJECT_SUMMARY.md** - What was built and why
7. **LIVE_SITE_INFO.md** - Live site information

### ✅ Community Infrastructure

1. **GitHub Issue Template** (`.github/ISSUE_TEMPLATE/new_database.md`)
   - Anyone can submit new databases
   - Structured form for database info
   - Link: https://github.com/Leran10/phage-database-guide/issues/new?template=new_database.md

2. **Contribution Guidelines** (`CONTRIBUTING.md`)
   - How to write database reviews
   - Review quality checklist
   - Code of conduct
   - Citation guidelines

3. **Launch Announcement** (`content/news/2026-03-launch.md`)
   - Documents initial launch
   - Current coverage summary

---

## 📋 What's Planned (Not Yet Done)

### High Priority: Add More Databases

**Next 10 databases to add** (from DATABASE_CATALOG.md):
- [ ] AlphaFold DB - Individual protein structure predictions
- [ ] InterPro - Integrated protein signatures
- [ ] DRAM-v - Viral annotation pipeline
- [ ] GPD (Gut Phage Database) - 142K gut phage genomes
- [ ] MGV (Metagenomic Gut Virus) - 189K gut viral genomes
- [ ] CRISPRdb - CRISPR spacers and repeats
- [ ] CheckV - Viral genome quality assessment tool
- [ ] VirSorter2 - Viral sequence identification
- [ ] eggNOG - Orthologous groups database
- [ ] KEGG Viruses - Metabolic pathways

**Medium Priority** (10+ more):
- [ ] GOV2.0 (Global Ocean Viromes)
- [ ] GVD (Gut Virome Database)
- [ ] Serratus - Planetary virome
- [ ] CRISPRCasdb - CRISPR-Cas systems
- [ ] Virus-Host DB
- [ ] MVP (Microbe vs Phage)
- [ ] VHRdb - Viral Host Range Database
- [ ] ViralZone - Viral biology knowledge base
- [ ] ICTV Database - Official taxonomy
- [ ] vConTACT2 - Network-based taxonomy

**Specialized/Tools** (10+ more):
- [ ] VIBRANT - Virus identification
- [ ] DeepVirFinder - ML-based viral detection
- [ ] PhageTerm - Phage termini determination
- [ ] PHACTS - Lifestyle prediction
- [ ] PhageAI - AI-based analysis
- [ ] Culture collections (ATCC, DSMZ, Félix d'Hérelle)

**Target**: 40+ database reviews total

### Automated Monitoring System

**Goal**: Automatically track new databases and papers

**To Implement**:
1. **GitHub Action for Journal Monitoring**
   - Monitor NAR Database Issue (annual, January)
   - Track Bioinformatics, Nature Biotechnology journals
   - RSS feed scraper
   - Auto-create GitHub Issues for new databases

2. **Preprint Monitoring**
   - bioRxiv/medRxiv search for "phage database"
   - Weekly automated check
   - PubMed API integration

3. **Version Tracking**
   - Track database version numbers in metadata
   - Detect when databases update
   - Changelog generation

4. **Link Checker**
   - Automated broken link detection
   - Weekly health check of all database URLs
   - Auto-create issues for broken links

5. **Newsletter/RSS Feed**
   - Generate "What's New" content
   - RSS feed for new databases
   - Optional email digest

**Implementation Files Needed**:
- `.github/workflows/monitor-databases.yml` - GitHub Action
- `scripts/check-links.js` - Link checker
- `scripts/monitor-journals.py` - RSS scraper
- `scripts/generate-rss.js` - RSS feed generator

### Enhanced Features

1. **Search & Filter**
   - Full-text search across reviews
   - Filter by: data type, organism, access method, quality
   - "Find database for X" wizard

2. **Comparison Tools**
   - Side-by-side database comparison
   - Coverage matrix (which taxa/functions covered)
   - Timeline visualization

3. **Better Homepage**
   - Update to show all databases dynamically
   - Filter/search on homepage
   - Statistics dashboard

4. **Paper Integration**
   - Add DOI/citations to all reviews
   - Auto-fetch paper metadata
   - Link to full papers
   - Track citations

---

## 📂 Project Structure

```
phage-database-guide/
├── .github/
│   ├── workflows/
│   │   └── deploy.yml                    # GitHub Pages deployment
│   └── ISSUE_TEMPLATE/
│       └── new_database.md               # Database submission template
├── app/
│   ├── page.tsx                          # Homepage
│   ├── layout.tsx                        # Root layout
│   └── globals.css                       # Styles
├── content/
│   ├── databases/                        # Database reviews (14 files)
│   │   ├── bfvd.md
│   │   ├── uniprot.md
│   │   ├── vogdb.md
│   │   ├── ncbi-viral.md
│   │   ├── imgvr.md
│   │   ├── pfam.md
│   │   ├── pdb.md
│   │   ├── inphared.md
│   │   ├── phaster.md
│   │   ├── millardlab.md
│   │   ├── phagesdb.md
│   │   ├── pharokka.md
│   │   ├── prophage-db.md
│   │   └── phagescope.md
│   ├── guides/
│   │   └── ml-training-data.md           # ML training guide
│   └── news/
│       └── 2026-03-launch.md             # Launch announcement
├── public/                               # Static assets
├── CONTRIBUTING.md                       # How to contribute
├── DATABASE_CATALOG.md                   # All phage databases list
├── DEPLOY.md                             # Deployment instructions
├── GETTING_STARTED.md                    # Quick start
├── README.md                             # Main documentation
├── ROADMAP.md                            # Project roadmap
├── PROJECT_SUMMARY.md                    # What was built
├── LIVE_SITE_INFO.md                     # Live site info
├── PROJECT_STATUS.md                     # This file
└── package.json                          # Dependencies
```

---

## 🔄 Workflow for Adding More Databases

### Option 1: Add Databases Yourself

```bash
# 1. Copy template
cd phage-database-guide
cp content/databases/bfvd.md content/databases/new-database.md

# 2. Edit the file
# - Update metadata (name, URL, data types, etc.)
# - Fill in sections (Overview, Quality, Use Cases, etc.)
# - Add your experience and tips

# 3. Commit and push
git add content/databases/new-database.md
git commit -m "Add NewDatabase review"
git push

# 4. Site auto-updates in ~2 minutes
```

### Option 2: Community Contributions

1. Share GitHub repo with colleagues
2. They submit databases via: https://github.com/Leran10/phage-database-guide/issues/new?template=new_database.md
3. You or they write reviews
4. Submit pull requests
5. You review and merge

### Option 3: Automated Discovery

(Future - requires implementation)
1. GitHub Action runs weekly
2. Checks journals/preprints for new database papers
3. Auto-creates GitHub Issues
4. You review and add to site

---

## 🎯 Next Steps (When You Continue)

### Immediate Priorities:

1. **Add 10 more database reviews** (from high-priority list)
   - AlphaFold DB, InterPro, DRAM-v, GPD, MGV
   - CRISPRdb, CheckV, VirSorter2, eggNOG, KEGG

2. **Update homepage** to dynamically show all databases
   - Read from `content/databases/` directory
   - Auto-generate database cards
   - Add search/filter

3. **Set up automated monitoring** (if desired)
   - Create GitHub Action for journal monitoring
   - RSS scraper for NAR Database Issue
   - Link checker

### Medium-Term:

1. **Expand to 40+ databases**
2. **Add more guides** (host range data, CRISPR analysis, etc.)
3. **Implement search functionality**
4. **Add comparison tools**

### Long-Term:

1. **Automated update system fully operational**
2. **Active community contributions**
3. **Cited in papers as resource**
4. **Sustainable maintenance**

---

## 🌐 Current URLs

**Live Site**: https://leran10.github.io/phage-database-guide/
**GitHub Repo**: https://github.com/Leran10/phage-database-guide
**Submit Database**: https://github.com/Leran10/phage-database-guide/issues/new?template=new_database.md
**Actions Status**: https://github.com/Leran10/phage-database-guide/actions

---

## 💡 Key Design Decisions

1. **Static Site Generation**: Next.js static export (fast, free hosting)
2. **Markdown Content**: Easy to edit, version control friendly
3. **GitHub Pages**: Free hosting, auto-deployment
4. **Community-Driven**: Open contributions via GitHub
5. **Honest Reviews**: Focus on real limitations, not just praise
6. **Comprehensive Coverage**: Goal to cover ALL phage databases

---

## 📊 Statistics

**Databases Reviewed**: 14
**Databases Catalogued**: 35+
**Guides Written**: 1
**Total Coverage**: ~40% of major databases
**Target Coverage**: 100% (all databases)

**Lines of Content**: ~8,000+ lines of markdown
**Documentation Files**: 10
**Review Files**: 14

---

## 🛠️ Technical Stack

**Framework**: Next.js 15.2.1
**Language**: TypeScript
**Styling**: Tailwind CSS
**Hosting**: GitHub Pages
**CI/CD**: GitHub Actions
**Cost**: $0 (completely free)

**Content Format**: Markdown with YAML frontmatter
**Deployment**: Automatic on git push (~2 minutes)

---

## 📝 Notes for Next Session

### Quick Commands:

```bash
# Start local dev server
cd phage-database-guide
npm run dev
# Visit http://localhost:3000

# Add new database review
cp content/databases/bfvd.md content/databases/your-db.md
# Edit the file, then:
git add content/databases/your-db.md
git commit -m "Add YourDB review"
git push

# Check deployment status
gh run list
```

### Files to Reference:

- **DATABASE_CATALOG.md** - See what databases still need reviews
- **ROADMAP.md** - Long-term vision
- **CONTRIBUTING.md** - Review writing guidelines
- **content/databases/bfvd.md** - Template/example for new reviews

### Resources:

- **NAR Database Issue**: Check annually (January) for new databases
- **bioRxiv search**: https://www.biorxiv.org/search/phage%20database
- **Phage community**: Twitter #phage, phage-therapy mailing lists

---

## 🎉 Accomplishments

You've built a **comprehensive, professional phage database knowledge resource** that:
- Fills a real gap (no equivalent exists)
- Helps researchers save time
- Based on real experience (not marketing)
- Open for community contributions
- Automatically deploys
- Completely free and sustainable

**The foundation is solid. Now it's about expanding coverage!**

---

*Status document last updated: March 24, 2026*
*For questions: Open issue on GitHub or check documentation files*
