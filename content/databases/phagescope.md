---
name: PhageScope
full_name: PhageScope - Comprehensive Phage Database
version: "1.0"
last_updated: "2024-01"
url: "https://phagescope.deepomics.org"
data_types:
  - genomes
  - annotations
  - comparative_genomics
  - lifestyle_predictions
  - host_range
organisms:
  - bacteriophages
size: 873718
phage_count: 873718
access_methods:
  - web
  - download
license: open
status: active
update_frequency: "Periodic"
citation: "PhageScope, Nucleic Acids Research, 2024"
---

# PhageScope

## Overview

PhageScope is a comprehensive, well-annotated bacteriophage database that aggregates phage sequences from multiple published datasets and provides extensive automated annotations.

**Key Statistics:**
- **Total Sequences**: 873,718 phage sequences
- **Data Sources**: 10+ databases (PhagesDB, GOV2, GVD, GPD, MGV, CHVD, STV, IGVD, IMG/VR, TemPhD)
- **Annotation Types**: 9 structural/functional elements
- **Comparative Studies**: 3 types included

## Data Composition

### Source Databases Integrated
- PhagesDB (actinobacteriophages)
- GOV2 (ocean viromes)
- GVD (gut viral database)
- GPD (gut phage database)
- MGV (metagenome-derived genomes)
- CHVD, STV, IGVD
- IMG/VR (IMG viral resource)
- TemPhD (temperate phages)

### Annotation Pipeline
Uses 15 state-of-the-art tools for systematic annotation:
- CheckV for genome completeness
- Host range predictions
- Lifestyle classification (lytic vs temperate)
- Taxonomy classification
- Structural element identification
- Functional gene annotations

## Data Quality

### Strengths
- **Comprehensive Coverage**: Largest aggregated phage database
- **Rich Annotations**: Multiple annotation types per sequence
- **Automated Analysis**: Consistent annotation pipeline
- **Comparative Genomics**: Built-in comparison tools
- **Genome Completeness**: CheckV quality scores provided
- **Regular Updates**: Actively maintained

### Limitations
- **Quality Variation**: Aggregated from diverse sources with varying quality
- **Metagenomic Bias**: Heavy representation of gut/ocean viromes
- **Prediction-Based**: Many annotations are computational predictions
- **Missing Novel Databases**: Doesn't include BFVD, some newer resources
- **No Protein Structures**: Focuses on sequences, not structural data

## Annotation Quality Breakdown

| Annotation Type | Coverage |
|----------------|----------|
| Genome completeness assessment | 100% |
| Lifestyle prediction (lytic/temperate) | ~80% |
| Host range predictions | ~65% |
| Taxonomy classification | ~90% |
| Functional gene annotations | ~45% |
| Structural elements (tail, head, etc.) | ~60% |

## Use Cases

### ✅ GOOD FOR:
- **Phage discovery**: Finding similar phages to your sequence
- **Comparative genomics**: Analyzing phage relationships
- **Lifestyle screening**: Finding lytic phages for therapy
- **Host range exploration**: Identifying phages for specific hosts
- **Taxonomy assignment**: Classifying new phage sequences
- **Large-scale analysis**: Bulk download for meta-analyses

### ❌ NOT GOOD FOR:
- **Protein structure analysis**: No structural data (use BFVD/PDB)
- **Highly curated datasets**: Quality varies by source
- **Real-time updates**: Some delay in incorporating new data
- **Experimental validation data**: Mostly computational predictions
- **Rare/exotic phages**: Bias toward gut and ocean environments

## Access & Download

### Web Interface
- **URL**: https://phagescope.deepomics.org
- **Search**: By sequence, phage name, host
- **Browse**: By taxonomy, lifestyle, data source
- **Visualization**: Interactive genomic viewers

### Download
- **Bulk Download**: Available for entire dataset
- **Custom Export**: Filter and download subsets
- **API**: Limited programmatic access
- **Formats**: FASTA, GenBank, JSON

## Integration with Other Databases

### Data Sources
- Integrates data FROM 10+ databases
- Cross-references to NCBI where available

### Recommended Complementary Resources
- **BFVD**: For protein structure data
- **MillardLab DB**: For experimental host range
- **NCBI RefSeq**: For official genome records
- **UniProt**: For protein functional annotations

## Researcher Experience

### Strengths Reported
- "Most comprehensive single search point for phages"
- "Great for finding similar sequences quickly"
- "Lifestyle predictions saved weeks of lab work"

### Challenges Reported
- "Quality varies - need to check original source"
- "Some predictions disagree with experimental data"
- "Wish it included protein structure predictions"

## Updates & Maintenance

### Update History
- **2024-01**: v1.0 released with 873K sequences
- **Status**: Actively maintained
- **Future**: Plans to incorporate more databases

### Community
- Active development team
- Responsive to user feedback
- Regular improvements to annotation pipeline

## Related Databases

### Overlapping Databases
- **PhageDive**: Smaller, more curated (1,167 phages)
- **IMG/VR**: One of PhageScope's data sources
- **NCBI Viral Genomes**: Official repository

### Complementary Databases
- **BFVD**: Protein structures
- **PDB**: Experimental structures
- **MillardLab**: Host range data
- **Prophage-DB**: Prophage-specific

## Quality Rating

| Category | Rating | Notes |
|----------|--------|-------|
| Coverage | ⭐⭐⭐⭐⭐ | Largest aggregated database |
| Annotation Completeness | ⭐⭐⭐⭐ | Comprehensive but prediction-based |
| Update Frequency | ⭐⭐⭐⭐ | Actively maintained |
| Ease of Access | ⭐⭐⭐⭐⭐ | Excellent web interface |
| Documentation | ⭐⭐⭐⭐ | Good documentation and paper |
| Data Quality | ⭐⭐⭐ | Varies by source |

## Bottom Line

PhageScope is the **most comprehensive single resource** for phage genomic data, making it an excellent starting point for most phage research projects. Its strength is breadth and automated annotations, but researchers should validate predictions and check original data sources for critical applications.

**Best For**: Initial phage discovery, comparative genomics, lifestyle screening
**Combine With**: BFVD (structures), MillardLab (host data), UniProt (protein functions)

---

*Last reviewed: March 2026*
*Contribute your experience: [GitHub Issues](#)*
