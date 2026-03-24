---
name: PHASTER
full_name: PHAge Search Tool Enhanced Release
version: "Current"
last_updated: "2023"
url: "https://phaster.ca"
data_types:
  - prophages
  - tool
  - database
organisms:
  - prophages_in_bacteria
prophage_db: 14000+
access_methods:
  - web
  - api
license: free
status: active
update_frequency: "Regular"
citation: "Arndt et al., Nucleic Acids Research, 2016"
---

# PHASTER - PHAge Search Tool Enhanced Release

## Overview

PHASTER is the **most popular tool for finding prophages in bacterial genomes**. Web service + database of known prophages.

**Key Statistics:**
- **Prophage Database**: 14,000+ reference prophages
- **Analysis Speed**: Typical genome in 3-5 minutes
- **Web Service**: Free, no installation needed
- **Automated**: Complete workflow from sequence to results

## Data Quality

### Strengths
- **Widely Used**: Standard tool for prophage detection
- **Fast**: Minutes per genome
- **Comprehensive**: Finds intact, questionable, incomplete prophages
- **Annotations**: Genes, functions, similarity to known phages
- **Visualization**: Nice graphical output

### Limitations
- **False Positives**: Can call prophage-like regions incorrectly
- **Annotation Quality**: Same "hypothetical protein" problem
- **Web Service**: Dependent on server availability
- **No Batch Mode**: Must submit genomes individually

## Use Cases

### ✅ GOOD FOR:
- Finding prophages in bacterial genomes
- Quick prophage screening
- Educational/exploratory analysis
- Individual genome analysis

### ❌ NOT GOOD FOR:
- High-throughput (use VirSorter2/Prophage-DB)
- Novel prophages (may miss divergent ones)
- Detailed functional annotation

## Access

**Web**: https://phaster.ca
**API**: Available for programmatic access
**Alternative**: VirSorter2 for command-line batch processing

## Bottom Line

**Go-to tool for prophage finding**. Easy web interface, fast results. For high-throughput, use VirSorter2 + Prophage-DB instead.

---
*Last reviewed: March 2026*
