---
name: NCBI Viral Genomes
full_name: NCBI Viral Genomes Resource
version: "Current"
last_updated: "Daily"
url: "https://www.ncbi.nlm.nih.gov/genome/viruses/"
data_types:
  - genomes
  - sequences
  - annotations
organisms:
  - all_viruses
  - bacteriophages
phage_count: ~15000
access_methods:
  - web
  - ftp
  - api
  - entrez
license: public_domain
status: active
update_frequency: "Daily updates"
citation: "NCBI Resource Coordinators, Nucleic Acids Research"
---

# NCBI Viral Genomes

## Overview

NCBI Viral Genomes is the **authoritative, official repository** for viral genome sequences. If a phage genome is published, it should be here. This is the gold standard reference database.

**Key Statistics:**
- **Total Viral Genomes**: 50,000+
- **Bacteriophage Genomes**: ~15,000 complete genomes
- **RefSeq Viral**: ~14,000 curated reference sequences
- **Daily Updates**: New submissions added continuously

## Data Quality

### Strengths
- **Official Repository**: Required for publication
- **RefSeq Curation**: Expert-reviewed reference sequences
- **Complete Metadata**: Taxonomy, host, collection date, location
- **Version Control**: Track sequence updates
- **Integration**: Links to proteins, literature, structures

### Limitations
- **Annotation Quality Varies**: Depends on submitter
- **Hypothetical Proteins**: 70-90% lack functional annotation
- **Inconsistent Standards**: Different annotation pipelines
- **RefSeq Lag**: Takes months to curate into RefSeq

## Use Cases

### ✅ GOOD FOR:
- Official genome sequences for publication
- Complete phage genomes (authoritative)
- Taxonomic classification
- Comparative genomics
- Downloading reference datasets

### ❌ NOT GOOD FOR:
- Protein functional annotations (use UniProt)
- Metagenomic phages (use IMG/VR)
- Protein structures (use BFVD/PDB)
- Consistent annotations (use InPhared)

## Access

**Web**: https://www.ncbi.nlm.nih.gov/genome/viruses/
**FTP**: ftp://ftp.ncbi.nlm.nih.gov/genomes/Viruses/
**API**: E-utilities (Entrez)

## Bottom Line

**THE** authoritative source for phage genomes. Always check here first. RefSeq subset is highest quality.

---
*Last reviewed: March 2026*
