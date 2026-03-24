---
name: Pfam
full_name: Protein Families Database
version: "36.0"
last_updated: "2023"
url: "https://pfam.xfam.org"
data_types:
  - protein_domains
  - protein_families
  - hmm_profiles
organisms:
  - all_domains
  - viruses
pfam_families: 20000+
access_methods:
  - web
  - ftp
  - hmmer
  - interproscan
license: CC0
status: active
update_frequency: "Annual releases"
citation: "Mistry et al., Nucleic Acids Research"
---

# Pfam - Protein Families Database

## Overview

Pfam is the **gold standard for protein domain classification**. Manually curated Hidden Markov Models (HMMs) for protein families. Essential for understanding protein function.

**Key Statistics:**
- **Protein Families**: 20,000+ Pfam entries
- **Viral Families**: ~500 viral-specific families
- **Coverage**: ~80% of UniProt sequences
- **Manual Curation**: Expert-reviewed annotations

## Data Quality

### Strengths
- **Manual Curation**: Each family expertly reviewed
- **HMM Profiles**: High-quality Hidden Markov Models
- **Comprehensive**: Covers most known protein domains
- **Well-Documented**: Detailed family descriptions
- **Cross-Referenced**: Links to GO, PDB, UniProt

### Limitations
- **Viral Coverage Limited**: Only ~500 viral families
- **Conservative**: Misses novel/divergent viral proteins
- **Slow Updates**: Annual release cycle
- **Domain-Level**: Not full protein function

## Use Cases

### ✅ GOOD FOR:
- Identifying protein domains
- Functional classification
- Homology detection (HMM search)
- ML feature extraction (domain presence/absence)
- Annotating conserved regions

### ❌ NOT GOOD FOR:
- Novel viral proteins (use VOGDB)
- Whole protein families (use VOGDB/eggNOG)
- Phage-specific functions (use VOGDB)

## Access

**Web**: https://pfam.xfam.org
**HMM Download**: Available for hmmsearch
**InterProScan**: Includes Pfam search

```bash
# Search against Pfam
hmmsearch --domtblout results.txt Pfam-A.hmm proteins.faa
```

## Integration

**VOGDB complements Pfam** - use both together:
- Pfam: conserved domains
- VOGDB: viral-specific families

## Bottom Line

Essential for protein domain identification. Use VOGDB for viral-specific families, Pfam for conserved domains. Combining both gives best coverage.

---
*Last reviewed: March 2026*
