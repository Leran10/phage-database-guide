---
name: InPhared
full_name: Infrastructure for a PHAge REference Database
version: "Current"
last_updated: "2024"
url: "https://github.com/RyanCook94/inphared"
data_types:
  - genomes
  - consistent_annotations
organisms:
  - bacteriophages
phage_genomes: 14000+
access_methods:
  - github
  - download
license: open
status: active
update_frequency: "Regular updates"
citation: "Cook et al., PHAGE, 2021"
---

# InPhared - Infrastructure for a PHAge REference Database

## Overview

InPhared provides **complete phage genomes with consistent gene calling and annotations**. Unlike NCBI where annotation quality varies, InPhared re-annotates everything uniformly.

**Key Statistics:**
- **Complete Genomes**: 14,244 (as of 2021, growing)
- **Consistent Annotation**: All genomes re-annotated with same pipeline
- **MASH Database**: For rapid genome comparison
- **ICTV Classification**: Includes recent taxonomy

## Data Quality

### Strengths
- **Consistent Annotations**: All genomes processed identically
- **Complete Genomes Only**: No fragments
- **Quality Control**: Curated list
- **Taxonomically Classified**: ICTV taxonomy included
- **Ready for Analysis**: Pre-processed for comparative genomics

### Limitations
- **Smaller than NCBI**: Only complete, classified genomes
- **Missing Fragments**: No partial genomes
- **Annotation Conservative**: May miss novel genes
- **Update Lag**: Newer than NCBI submissions missing

## Use Cases

### ✅ GOOD FOR:
- Comparative genomics (consistent annotations!)
- Phylogenetic analysis
- Genome classification (MASH database)
- Reference dataset for studies
- Training ML models (consistent labels)

### ❌ NOT GOOD FOR:
- Newest phages (use NCBI)
- Metagenomic fragments (use IMG/VR)
- Functional annotations (still hypothetical)

## Access

**GitHub**: https://github.com/RyanCook94/inphared
**Download**: Genomes, proteins, MASH DB
**Formats**: GenBank, FASTA

## Bottom Line

**Best source for consistent, high-quality phage genome annotations**. Use this instead of raw NCBI for comparative genomics. Solves the "every genome annotated differently" problem.

---
*Last reviewed: March 2026*
