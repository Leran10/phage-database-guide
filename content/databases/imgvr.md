---
name: IMG/VR
full_name: Integrated Microbial Genomes/Virus
version: "v4"
last_updated: "2023"
url: "https://img.jgi.doe.gov/vr/"
data_types:
  - metagenome_viruses
  - genomes
  - annotations
organisms:
  - environmental_viruses
  - phages
viral_sequences: 15000000+
access_methods:
  - web
  - download
  - api
license: open
status: active
update_frequency: "Annual major releases"
citation: "Camargo et al., Nature Biotechnology, 2023"
---

# IMG/VR (Integrated Microbial Genomes/Virus)

## Overview

IMG/VR is the **largest database of viral sequences from metagenomes**. Contains >15 million viral sequences from environmental samples worldwide.

**Key Statistics:**
- **Viral Sequences**: 15+ million
- **Metagenome Sources**: 20,000+ samples
- **Quality Tiers**: Complete, high-quality, medium-quality, low-quality
- **Annotations**: Automated using IMG pipeline

## Data Quality

### Strengths
- **Massive Scale**: Most comprehensive metagenomic viral collection
- **Quality Scores**: CheckV completeness assessments
- **Geographic Diversity**: Samples from all environments
- **Integrated Annotations**: Genes, functions, taxonomy

### Limitations
- **Metagenomic**: Many are fragments, not complete genomes
- **Quality Varies**: 60% are medium/low quality
- **Taxonomy Uncertain**: Many unclassified
- **Annotation Automated**: Not manually curated

## Use Cases

### ✅ GOOD FOR:
- Discovering novel phages
- Environmental phage diversity
- Metagenomic viral dark matter
- Large-scale comparative studies
- Finding uncultured phages

### ❌ NOT GOOD FOR:
- High-quality reference genomes (use NCBI RefSeq)
- Detailed functional annotation (use UniProt)
- Cultured phage collection (use PhagesDB)

## Access

**Web**: https://img.jgi.doe.gov/vr/
**Download**: Available after registration
**Size**: Multiple terabytes

## Bottom Line

The largest viral metagenomic database. Essential for discovering environmental phage diversity. Quality varies - use CheckV scores to filter.

---
*Last reviewed: March 2026*
