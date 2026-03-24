# PhageDB Knowledge Base Roadmap

## Vision

Build the **most comprehensive, up-to-date resource** for phage database knowledge, covering ALL databases and dynamically updated with new releases.

## Current Status (March 2026)

✅ **MVP Launched**
- 14 database reviews
- DATABASE_CATALOG.md tracking 35+ databases
- Community contribution system
- Auto-deployment via GitHub Pages

## Phase 1: Comprehensive Coverage (Current - Q2 2026)

### Goal: Cover ALL Major Phage Databases

**Databases to Add (Priority Order):**

**High Priority (Next 10):**
- [ ] AlphaFold DB
- [ ] InterPro
- [ ] DRAM-v
- [ ] GPD (Gut Phage Database)
- [ ] MGV (Metagenomic Gut Virus)
- [ ] CRISPRdb
- [ ] CheckV
- [ ] VirSorter2
- [ ] eggNOG
- [ ] KEGG Viruses

**Medium Priority:**
- [ ] GOV2.0 (Global Ocean Viromes)
- [ ] GVD (Gut Virome Database)
- [ ] Serratus
- [ ] CRISPRCasdb
- [ ] Virus-Host DB
- [ ] MVP (Microbe vs Phage)
- [ ] VHRdb
- [ ] ViralZone
- [ ] ICTV Database
- [ ] vConTACT2

**Specialized/Tool-Focused:**
- [ ] VIBRANT
- [ ] DeepVirFinder
- [ ] PhageTerm
- [ ] PHACTS
- [ ] PhageTail Finder
- [ ] PhageAI

**Culture Collections:**
- [ ] ATCC Bacteriophages
- [ ] DSMZ Phage Collection
- [ ] Félix d'Hérelle Center

**Target**: 40+ database reviews by end of Q2 2026

---

## Phase 2: Dynamic Updates & Automation (Q3 2026)

### Goal: Automatically Track New Databases

**Features to Implement:**

1. **Automated Monitoring**
   - [ ] RSS feed scraper for journals (NAR Database Issue, etc.)
   - [ ] bioRxiv/medRxiv preprint monitoring (phage database papers)
   - [ ] GitHub topic monitoring (phage, viral, database)
   - [ ] Weekly automated check for new publications

2. **Paper Integration**
   - [ ] Add DOI/citation to all existing reviews
   - [ ] Auto-fetch paper metadata from DOI
   - [ ] Link to database papers in reviews
   - [ ] Track database updates via paper citations

3. **Update Notifications**
   - [ ] Email/RSS newsletter for new databases
   - [ ] Timeline page showing database launch dates
   - [ ] "What's New" section on homepage
   - [ ] GitHub Actions bot to notify about new NAR database papers

4. **Version Tracking**
   - [ ] Track database version numbers
   - [ ] Changelog for major database updates
   - [ ] "Recently Updated" section

**Implementation Plan:**
- Use GitHub Actions for automation
- RSS feeds from key journals
- PubMed API for paper monitoring
- Community submissions via GitHub Issues

---

## Phase 3: Enhanced Features (Q4 2026)

### Goal: Make the Resource More Powerful

1. **Search & Discovery**
   - [ ] Full-text search across all reviews
   - [ ] Filter by data type, organism, access method
   - [ ] "Find database for my use case" wizard
   - [ ] Comparison tool (side-by-side database comparison)

2. **Interactive Features**
   - [ ] Database comparison matrix
   - [ ] Coverage heatmap (which taxa/functions are well-covered)
   - [ ] Timeline visualization (database launches over time)
   - [ ] Network graph (database relationships/overlaps)

3. **Community Features**
   - [ ] User comments on reviews
   - [ ] Upvote/downvote helpful reviews
   - [ ] "I used this database for..." stories
   - [ ] Community-contributed tips section

4. **API Access**
   - [ ] RESTful API for programmatic access
   - [ ] Query databases by criteria
   - [ ] Integration with other tools

---

## Phase 4: Expansion & Sustainability (2027+)

### Goal: Long-term Community Resource

1. **Content Expansion**
   - [ ] Video tutorials for major databases
   - [ ] Webinars on database selection
   - [ ] Case studies from researchers
   - [ ] Integration guides (how to combine databases)

2. **Quality Assurance**
   - [ ] Regular review updates (every 6 months)
   - [ ] Community voting on review accuracy
   - [ ] Expert verification badges
   - [ ] Deprecation tracking (databases that shut down)

3. **Internationalization**
   - [ ] Multi-language support
   - [ ] Regional database coverage
   - [ ] Global contributor network

4. **Sustainability**
   - [ ] Consider domain name (phagedb.org?)
   - [ ] Potential grant funding for maintenance
   - [ ] Community governance model
   - [ ] Integration with existing phage resources

---

## Automated Update Strategy

### How We'll Stay Current:

**1. Journal Monitoring**
- Nucleic Acids Research (NAR) Database Issue (annual)
- Nature Biotechnology, Bioinformatics, etc.
- RSS feeds + automated parsing

**2. Preprint Monitoring**
- bioRxiv/medRxiv search for "phage database"
- Weekly GitHub Action to check new preprints
- Auto-create GitHub Issues for review

**3. Community Contributions**
- GitHub Issue template for new databases
- Email submissions
- Twitter/social media monitoring

**4. Version Control**
- Track database versions in metadata
- Git history shows all changes
- Automated checks for broken links

**5. Citation Tracking**
- DOI monitoring for database papers
- Google Scholar alerts
- PubMed API integration

---

## Success Metrics

### Short-term (2026):
- [ ] 40+ database reviews
- [ ] 100+ GitHub stars
- [ ] 10+ community contributions
- [ ] 1000+ unique visitors/month

### Medium-term (2027):
- [ ] Comprehensive coverage (50+ databases)
- [ ] Auto-update system functional
- [ ] Cited in papers
- [ ] Established as go-to resource

### Long-term (2028+):
- [ ] THE definitive phage database guide
- [ ] Active contributor community
- [ ] Integrated into education/training
- [ ] Sustainable maintenance model

---

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to help!

**Priority contributions:**
1. Database reviews (especially for databases not yet covered)
2. Updates to existing reviews
3. Real-world experience stories
4. New database discoveries

---

## Questions or Suggestions?

[Open an issue](https://github.com/Leran10/phage-database-guide/issues) or contribute directly!

---

*Roadmap last updated: March 24, 2026*
*Living document - will be updated as project evolves*
