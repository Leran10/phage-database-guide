---
name: Pharokka
full_name: Pharokka - Phage Annotation Tool
version: "1.6+"
last_updated: "2024"
url: "https://github.com/gbouras13/pharokka"
data_types:
  - annotation_tool
  - databases
organisms:
  - bacteriophages
access_methods:
  - command_line
  - conda
  - docker
license: MIT
status: active
update_frequency: "Regular updates"
citation: "Bouras et al., Bioinformatics, 2023"
---

# Pharokka - Fast Phage Annotation Tool

## Overview

Pharokka is the **most popular modern phage genome annotation pipeline**. Fast, comprehensive, and actively maintained.

**Key Features:**
- **Integrated Databases**: VOGDB, Pfam, CARD (AMR genes)
- **Fast**: Minutes per genome (uses MMseqs2)
- **Comprehensive**: Structural + functional annotation
- **tRNA Detection**: Finds tRNAs, tmRNAs
- **Output Formats**: GenBank, GFF, plots

## What It Uses

Pharokka integrates multiple databases:
- **VOGDB**: Viral orthologous groups
- **Pfam**: Protein domains
- **CARD**: Antimicrobial resistance genes
- **tRNAscan-SE**: tRNA detection
- **MinCED**: CRISPR arrays

## Data Quality

### Strengths
- **Best-in-Class**: Current standard for phage annotation
- **Fast**: Faster than BLAST-based pipelines
- **Comprehensive**: Multiple databases in one run
- **Well-Maintained**: Active development
- **User-Friendly**: Easy installation, good docs

### Limitations
- **Still Hypothetical**: Can't fix the annotation gap
- **Computational Predictions**: No experimental validation
- **Requires Installation**: Not a web service

## Use Cases

### ✅ GOOD FOR:
- Annotating new phage genomes
- Standardized annotation pipeline
- Batch processing
- Research publications

### ❌ NOT GOOD FOR:
- Real-time web annotation (use PHASTER)
- Detailed manual curation

## Installation

```bash
# Via conda
conda install -c bioconda pharokka

# Run
pharokka.py -i genome.fasta -o output_dir
```

## Bottom Line

**Current standard for phage genome annotation**. Use this instead of manual BLAST annotation. Fast, comprehensive, actively maintained. Integrates VOGDB, Pfam, and more.

---
*Last reviewed: March 2026*
