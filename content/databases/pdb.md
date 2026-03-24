---
name: PDB
full_name: Protein Data Bank
version: "Current"
last_updated: "Weekly"
url: "https://www.rcsb.org"
data_types:
  - protein_structures
  - experimental
  - xray
  - nmr
  - cryo_em
organisms:
  - all_organisms
viral_structures: 20000+
phage_structures: ~5000
access_methods:
  - web
  - ftp
  - api
license: open
status: active
update_frequency: "Weekly releases"
citation: "Berman et al., Nucleic Acids Research"
---

# PDB - Protein Data Bank

## Overview

PDB is the **official repository for experimentally determined 3D protein structures**. Gold standard for structural biology.

**Key Statistics:**
- **Total Structures**: 200,000+
- **Viral Proteins**: ~20,000
- **Phage Proteins**: ~5,000
- **Methods**: X-ray, NMR, Cryo-EM, Electron microscopy

## Data Quality

### Strengths
- **Experimental**: Real structures, not predictions
- **High Resolution**: Often atomic-level detail
- **Quality Metrics**: R-factor, resolution, validation
- **Rich Metadata**: Experimental conditions, ligands
- **Validated**: Peer-reviewed and validated

### Limitations
- **Small Coverage**: <1% of proteins have structures
- **Bias**: Well-studied proteins over-represented
- **Crystallization Bias**: Hard-to-crystallize proteins missing
- **Limited Phage Proteins**: Only well-studied systems

## Use Cases

### ✅ GOOD FOR:
- High-quality structural validation
- Mechanistic studies
- Drug design
- Training/testing ML structure models
- Benchmark for AlphaFold

### ❌ NOT GOOD FOR:
- Large-scale structural coverage (use BFVD)
- Novel phage proteins (use AlphaFold/BFVD)
- High-throughput annotation

## Access

**Web**: https://www.rcsb.org
**FTP**: ftp://ftp.wwpdb.org/pub/pdb/
**API**: RESTful API available

## vs AlphaFold/BFVD

| Feature | PDB | BFVD/AlphaFold |
|---------|-----|----------------|
| Quality | Experimental | Predicted |
| Coverage | <1% | ~100% |
| Phage proteins | ~5K | 162K |
| Resolution | Atomic | Model confidence |
| Best for | Validation | Coverage |

## Bottom Line

Use PDB for validation and high-confidence structures. Use BFVD for coverage. PDB is ground truth, but covers <1% of phage proteins.

---
*Last reviewed: March 2026*
