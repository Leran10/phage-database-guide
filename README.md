# PhageDB Knowledge Base

A comprehensive guide to bacteriophage database resources, helping researchers navigate the landscape of phage databases with reviews, quality assessments, and practical guides.

## What is This?

This is **NOT** another phage database. Instead, it's a knowledge resource **ABOUT** phage databases - think "Wirecutter for phage databases."

### What We Provide:

- **Database Reviews**: Detailed assessments of data quality, coverage, and use cases
- **Quality Ratings**: Honest evaluations based on real researcher experience
- **Use Case Guides**: "I need X, which database should I use?"
- **Update Tracking**: Stay informed about new databases and updates
- **Community Contributions**: Share your experiences and tips

## Why This Exists

**The Problem:**
- 20+ phage databases exist, each with different strengths
- No central guide to help researchers choose the right one
- Quality and coverage information is scattered
- Researchers waste time downloading wrong databases
- 90% of phage proteins lack functional annotations

**Our Solution:**
A living resource that helps researchers:
1. Discover which databases exist
2. Understand data quality and limitations
3. Choose the right database for their specific needs
4. Avoid common pitfalls
5. Stay updated on new resources

## Featured Content

### Database Reviews

- **BFVD**: 162K AlphaFold-predicted phage protein structures
  - Quality: 85% high confidence, but 90% lack functional annotations
  - Best for: Structure-based ML training
  - Not for: Functional annotation lookups

- **PhageScope**: 873K phage sequences with comprehensive annotations
  - Largest aggregated database
  - Best for: Discovery, comparative genomics
  - Includes: Lifestyle predictions, host range

### Guides

- **Finding ML Training Data**: How to curate quality training data despite the "hypothetical protein" problem

## Getting Started

### For Researchers

1. **Browse databases** by category (genomes, proteins, host range, etc.)
2. **Read reviews** to understand quality and limitations
3. **Follow guides** for specific use cases
4. **Contribute** your experiences to help others

### For Developers

This is a Next.js project. To run locally:

```bash
cd phage-database-guide
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
phage-database-guide/
├── app/                  # Next.js app directory
│   └── page.tsx         # Homepage
├── content/             # Markdown content
│   ├── databases/       # Database reviews
│   │   ├── bfvd.md
│   │   └── phagescope.md
│   ├── guides/          # Use case guides
│   │   └── ml-training-data.md
│   └── news/            # Updates and news
└── public/              # Static assets
```

## Contributing

We welcome contributions from the research community!

### How to Contribute:

1. **Database Reviews**: Share your experience with a phage database
2. **Quality Updates**: Report changes in database quality or coverage
3. **Use Case Guides**: Write guides for specific research workflows
4. **Bug Reports**: Found an error? Let us know

### Adding a Database Review

1. Copy the template from `content/databases/bfvd.md`
2. Fill in metadata and sections
3. Include:
   - Data quality assessment
   - Use cases (good for / not good for)
   - Real-world experience
   - Integration tips
4. Submit a pull request

## Roadmap

### Phase 1 (Current - MVP)
- [x] Project setup
- [x] 2 database reviews (BFVD, PhageScope)
- [x] 1 use case guide (ML training data)
- [x] Basic homepage
- [ ] Deploy to Vercel

### Phase 2 (Next 1-2 months)
- [ ] Add 10+ more database reviews
- [ ] Search and filter functionality
- [ ] Database comparison tool
- [ ] Update tracking system
- [ ] Community contribution workflow

### Phase 3 (3-6 months)
- [ ] Automated update monitoring
- [ ] Newsletter/RSS feed
- [ ] Interactive quality metrics
- [ ] API for programmatic access

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Content**: Markdown files
- **Hosting**: Vercel (planned)
- **Cost**: $0-10/month

## Databases Covered (So Far)

| Database | Type | Size | Status |
|----------|------|------|--------|
| BFVD | Structures | 162K proteins | Reviewed ✓ |
| PhageScope | Genomes | 873K sequences | Reviewed ✓ |
| MillardLab | Host Range | TBD | Planned |
| IMG/VR | Metagenomes | TBD | Planned |
| NCBI Viral | Genomes | TBD | Planned |
| PDB | Structures | TBD | Planned |

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

Content: CC BY 4.0 (Creative Commons Attribution)
Code: MIT License

## Acknowledgments

Built to address real pain points experienced during the phage-qbio-poc project, where finding quality training data for ML models proved challenging due to scattered databases and poor annotation quality.

---

**Last Updated**: March 2026

*Help us improve phage research by sharing your database experiences!*
