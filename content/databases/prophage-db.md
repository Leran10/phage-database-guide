---
name: Prophage-DB
full_name: Prophage Database
version: "v2"
last_updated: "2024"
url: "https://github.com/dyxstat/Prophage-Database"
data_types:
  - prophages
  - genomes
organisms:
  - prophages
  - bacteria
prophage_sequences: 356000+
access_methods:
  - github
  - download
license: open
status: active
update_frequency: "Periodic"
citation: "Song et al., bioRxiv, 2024"
---

# Prophage-DB - Comprehensive Prophage Database

## Overview

Prophage-DB contains **356,776 prophage sequences** identified from bacterial and archaeal genomes. Largest prophage collection available.

**Key Statistics:**
- **Total Prophages**: 356,776
- **Bacterial**: 323,608
- **Archaeal**: 11,942
- **Unknown Host**: 21,226
- **Sources**: GTDB, NCBI RefSeq, SPIRE

## Data Quality

### Strengths
- **Largest Collection**: Most comprehensive prophage database
- **Multiple Sources**: GTDB, RefSeq, SPIRE
- **Quality Scores**: CheckV completeness
- **Metadata**: Host taxonomy, genomic location
- **Downloadable**: Full dataset available

### Limitations
- **Computational Predictions**: Not experimentally validated
- **Quality Varies**: Includes incomplete prophages
- **Annotation Variable**: Depends on source
- **False Positives**: Prophage-like regions may not be true prophages

## Use Cases

### ✅ GOOD FOR:
- Large-scale prophage analysis
- Prophage diversity studies
- Training prophage detection models
- Host-prophage relationships
- Bulk downloads

### ❌ NOT GOOD FOR:
- Individual prophage validation (use PHASTER)
- High-confidence prophages only (filter by quality)
- Experimental validation

## Access

**GitHub**: https://github.com/dyxstat/Prophage-Database
**Download**: Full database files
**Format**: FASTA, metadata tables

## Bottom Line

**Largest prophage database available**. Essential for large-scale prophage studies. Use quality scores to filter. Complement with PHASTER for individual genome analysis.

---
*Last reviewed: March 2026*
