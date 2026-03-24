# Contributing to PhageDB Knowledge Base

Thank you for helping build the most comprehensive phage database resource! 🦠

## How to Contribute

There are several ways to contribute:

### 1. Suggest a New Database

Found a phage database we don't have? [Open an issue](https://github.com/Leran10/phage-database-guide/issues/new?template=new_database.md) using the "New Database" template.

### 2. Write a Database Review

The most valuable contribution! Share your experience with a database.

#### Quick Start:
```bash
# 1. Fork the repository
# 2. Copy an existing review as template
cp content/databases/bfvd.md content/databases/your-database.md

# 3. Edit the file with your database info
# 4. Commit and create a pull request
```

#### What to Include:

**Required:**
- Database name, URL, description
- Data types and organism coverage
- Access methods
- Your honest assessment: strengths AND limitations
- Use cases: what it's good for, what it's NOT good for

**Optional but valuable:**
- Real-world experience ("I used this for...")
- Time investment required
- Data quality assessment
- Integration tips
- Code examples

#### Review Template Structure:

```markdown
---
name: DatabaseName
full_name: Full Database Name
url: https://database.org
data_types: [genomes, proteins, etc]
# ... metadata
---

# Database Name

## Overview
Brief description and key statistics

## Data Quality
Strengths and limitations

## Use Cases
✅ GOOD FOR: ...
❌ NOT GOOD FOR: ...

## Access
How to get the data

## Bottom Line
Your honest recommendation
```

### 3. Update Existing Reviews

Databases change! Help keep reviews current:
- Update statistics
- Add new features
- Report broken links
- Share recent experiences

### 4. Report Issues

- Broken links
- Outdated information
- Missing databases
- Suggestions for improvement

## Review Guidelines

### Be Honest

**Most important**: Help researchers make informed decisions
- Don't just praise - mention limitations
- "90% lack annotations" is more useful than "good database"
- Share what surprised you or took longer than expected

### Be Specific

- "162K proteins" > "many proteins"
- "2 weeks manual curation" > "takes some time"
- "Use for ML training, NOT for host range" > "useful database"

### Include Evidence

- Link to papers
- Show numbers (size, coverage, update frequency)
- Reference your experience
- Cite version numbers

### Keep It Practical

Focus on:
- What researchers actually need to know
- Real-world use cases
- Time/effort required
- Integration with other tools

## Database Review Checklist

Before submitting:

- [ ] Filled in all metadata (name, URL, data types, etc.)
- [ ] Included data quality assessment (strengths AND limitations)
- [ ] Listed specific use cases (good for / not good for)
- [ ] Provided access information (URL, API, download)
- [ ] Added citation/paper if available
- [ ] Included real-world tips or experience
- [ ] Checked for typos and broken links
- [ ] Added "Last reviewed" date

## Paper Citations

When a database has an associated paper:

```yaml
citation: "Authors et al., Journal, Year"
paper_doi: "10.1234/journal.2024.123"
paper_url: "https://doi.org/..."
```

Include in review:
```markdown
## Publication

**Original Paper**: [Title](DOI link)
- **Authors**: First Author et al.
- **Journal**: Nature Methods
- **Year**: 2023
- **DOI**: 10.1234/example
```

## Code of Conduct

- Be respectful and constructive
- Focus on facts, not opinions
- Help, don't criticize
- Credit others' work
- Assume good intent

## Review Process

1. **Submit**: Create a pull request
2. **Review**: Maintainers review for quality and completeness
3. **Revise**: Address any feedback
4. **Merge**: Your contribution goes live!
5. **Celebrate**: You've helped the phage research community! 🎉

## Quick Examples

### Good Review Excerpt:
```markdown
## Data Quality

### Strengths
- 85% of structures have pLDDT >70 (high confidence)
- Covers 162K phage proteins not in PDB
- Compatible with P2Rank for domain detection

### Limitations
- 90% lack functional annotations ("hypothetical protein")
- AlphaFold predictions, not experimental
- No metadata on phage lifestyle or host

### Researcher Experience
I used BFVD for training an ML classifier. Downloaded 162GB,
filtered by pLDDT >70 (85% passed). Had to manually curate
functional labels from UniProt (2 weeks). Worth it for
structural features, but plan extra time for annotations.
```

### Less Helpful Review:
```markdown
## Data Quality

This is a good database with many structures. The quality is
generally good. Useful for research.
```

## Need Help?

- Check existing reviews for examples
- Ask questions in issues
- Read the README for project overview
- Contact maintainers: [open an issue](https://github.com/Leran10/phage-database-guide/issues)

## Attribution

All contributions are credited in git history and appreciated in the community!

## License

By contributing, you agree that your contributions will be licensed under:
- **Content**: CC BY 4.0 (Creative Commons Attribution)
- **Code**: MIT License

This allows the community to freely use and build upon your work while giving you credit.

---

**Thank you for helping researchers navigate the phage database landscape!**

Ready to contribute? Start by [suggesting a database](https://github.com/Leran10/phage-database-guide/issues/new?template=new_database.md) or writing a review!
