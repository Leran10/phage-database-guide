---
name: MillardLab
full_name: MillardLab Phage-Host Interaction Database
version: "Current"
last_updated: "2023"
url: "https://millardlab.org/bioinformatics/bacteriophage-host-prediction/"
data_types:
  - host_range
  - experimental
organisms:
  - phages
  - bacteria
phage_host_pairs: 10000+
access_methods:
  - download
  - github
license: open
status: active
update_frequency: "Periodic"
citation: "Millard Lab, University of Leicester"
---

# MillardLab Phage-Host Interaction Database

## Overview

The **best source for experimentally determined phage-host interactions**. Curated from literature, not predictions.

**Key Statistics:**
- **Phage-Host Pairs**: 10,000+ experimental interactions
- **Literature-Curated**: From published studies
- **Quality**: Experimental evidence, not predictions
- **Coverage**: Diverse bacterial hosts

## Data Quality

### Strengths
- **Experimental Evidence**: Real lab-tested interactions
- **Literature-Based**: Traceable to publications
- **Curated**: Quality-controlled
- **Host Range Data**: Which phages infect which bacteria
- **Therapeutic Relevance**: Important for phage therapy

### Limitations
- **Limited Coverage**: Only published interactions
- **Bias**: Well-studied systems over-represented
- **Static**: Depends on literature publication pace
- **No Predictions**: Doesn't include computational predictions

## Use Cases

### ✅ GOOD FOR:
- Training ML models for host prediction
- Validating host range predictions
- Finding phages for specific hosts
- Phage therapy selection
- Ground truth for computational methods

### ❌ NOT GOOD FOR:
- Comprehensive host range (use PhageScope predictions)
- Novel/uncultured phages
- High-throughput screening

## Access

**Website**: https://millardlab.org/bioinformatics/
**Download**: CSV/TSV files
**GitHub**: Available in repositories

## Bottom Line

**THE source for experimental phage-host interactions**. Essential for ML training and phage therapy. Use this for ground truth, PhageScope for coverage.

---
*Last reviewed: March 2026*
