---
title: "Finding Training Data for Phage Protein ML Models"
category: machine-learning
difficulty: intermediate
last_updated: "2026-03"
tags:
  - machine-learning
  - protein-function
  - data-curation
---

# Finding Training Data for Phage Protein Machine Learning Models

## The Challenge

You want to train a machine learning model to predict phage protein functions, but face a common problem: **90% of phage proteins are annotated as "hypothetical protein"** with no functional information.

This guide helps you find and curate quality training data despite this challenge.

## Quick Recommendations

| Your Goal | Recommended Databases | Expected Effort |
|-----------|---------------------|-----------------|
| Protein structures | BFVD, PDB | Low (download ready) |
| Functional labels (curated) | UniProt/SwissProt | Medium (manual curation) |
| Domain annotations | Pfam, InterPro | Low (automated) |
| Sequence data | NCBI RefSeq, PhageScope | Low (download ready) |
| Experimental data | PDB (subset) | High (limited availability) |

## Step-by-Step Workflow

### Step 1: Get Structural Data

**For Structure-Based Models:**

1. **Download BFVD** (recommended for phage proteins)
   - 162,000 phage protein structures
   - AlphaFold predictions
   - Filter by pLDDT >70 for high confidence
   - ⚠️ Expect ~162 GB download

2. **Alternative: PDB**
   - ~20,000 viral protein experimental structures
   - Higher quality but much smaller
   - Good for validation set

**Quality Check:**
```python
# Filter BFVD structures by confidence
# Keep only pLDDT > 70 (85% of database)
import numpy as np

def filter_by_plddt(pdb_file, threshold=70):
    # Extract pLDDT from b-factor column
    plddt_scores = extract_plddt(pdb_file)
    mean_plddt = np.mean(plddt_scores)
    return mean_plddt > threshold
```

### Step 2: Get Functional Labels

**The Annotation Problem:**
- BFVD: 90% labeled "hypothetical"
- PhageScope: ~55% lack specific function
- NCBI: Variable annotation quality

**Solutions:**

#### Option A: Use Pfam Domains as Weak Labels (Easiest)
- **Coverage**: ~35% of BFVD proteins
- **Effort**: Low (automated)
- **Quality**: Moderate (domain ≠ specific function)

```bash
# Example: Extract Pfam domains
hmmscan --domtblout output.txt Pfam-A.hmm proteins.fasta
```

**Common Phage Protein Domains:**
- `PF00665`: Integrase
- `PF13482`: HTH domain (DNA-binding)
- `PF03354`: Phage head morphogenesis
- `PF04233`: Tail fiber

#### Option B: Manual Curation from Literature (Best Quality)
- **Coverage**: 5-10% of proteins
- **Effort**: High (~2 weeks for 100 proteins)
- **Quality**: High (experimentally validated)

**Workflow:**
1. Start with proteins that have Pfam domains
2. Search UniProt for same protein IDs
3. Check "Function" section for experimental evidence
4. Look for ECO evidence codes: `ECO:0000269` (experiment)
5. Cross-reference with papers for validation

#### Option C: Use Pre-Curated Sets (Fastest)
- **UniProt/SwissProt**: Manually reviewed subset
- Query: `taxonomy:phage AND reviewed:yes`
- **Coverage**: ~5,000 phage proteins
- **Effort**: Low (download ready)
- **Quality**: High (expert curated)

### Step 3: Create Balanced Training Set

**Common Classes for Phage Proteins:**
1. DNA-binding proteins (repressors, integrases)
2. Structural proteins (head, tail, baseplate)
3. DNA replication proteins
4. Lysis proteins
5. DNA packaging proteins

**Tips:**
- Aim for 50-100 examples per class minimum
- Check class balance
- Keep test set completely separate
- Consider stratified splits by phage family

### Step 4: Cross-Validate Annotations

Before training, validate your labels:

1. **Check consistency**: Do Pfam domains match function labels?
2. **Look for conflicts**: UniProt vs NCBI vs literature
3. **Verify confidence**: Is it experimental or predicted?
4. **Remove ambiguous**: When in doubt, exclude

## Real-World Example: Repressor vs Integrase Classifier

**Project Goal**: Distinguish DNA-binding repressors from integrases

**Data Sources Used:**
- Structures: BFVD (162K phage proteins)
- Labels: UniProt + manual literature curation
- Validation: PDB experimental structures

**Workflow:**
1. Downloaded all BFVD phage proteins
2. Filtered by pLDDT >70 (85% passed)
3. Searched UniProt for "repressor" and "integrase"
4. Found ~50 curated repressors, ~30 integrases
5. Manual curation from papers: +20 repressors, +15 integrases
6. Final training set: 70 repressors, 45 integrases
7. Time investment: 2 weeks data collection + cleaning

**Results:**
- 73.3% accuracy on 15-protein test set
- Key feature: hydrophobicity distinguished classes
- Lesson: Small but high-quality > large but noisy

## Database Comparison for ML Training

| Database | Structures | Labels | Curation | Best For |
|----------|-----------|--------|----------|----------|
| **BFVD** | ⭐⭐⭐⭐⭐ | ⭐ | Automated | Feature extraction |
| **PDB** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Manual | Validation set |
| **UniProt** | ❌ | ⭐⭐⭐⭐⭐ | Expert | Ground truth labels |
| **Pfam** | ❌ | ⭐⭐⭐ | Automated | Weak labels |
| **PhageScope** | ❌ | ⭐⭐ | Mixed | Genomic context |

## Common Pitfalls

### 1. Using Predicted Annotations as Ground Truth
❌ **Don't**: Train on PhageScope lifestyle predictions without validation
✅ **Do**: Validate predictions with experimental data from literature

### 2. Ignoring Annotation Biases
❌ **Don't**: Assume annotations are complete or unbiased
✅ **Do**: Check for over-representation of model organisms (e.g., T4, Lambda)

### 3. Mixing Annotation Quality
❌ **Don't**: Combine SwissProt (curated) with TrEMBL (automated) labels
✅ **Do**: Keep annotation sources separate or weighted by confidence

### 4. Insufficient Test Set
❌ **Don't**: Use only 5-10 test examples
✅ **Do**: Aim for at least 15-20% of data, minimum 20 examples per class

## Recommended Workflows by Task

### Task: Protein Function Classification

**Minimal Viable Dataset** (2-3 weeks):
1. UniProt/SwissProt phage proteins (curated labels)
2. BFVD structures (filtered pLDDT >70)
3. ~50-100 proteins per class
4. Manual validation of labels

**Comprehensive Dataset** (1-2 months):
1. Start with UniProt curated set
2. Expand with Pfam domain-based labels
3. Manual literature curation for edge cases
4. BFVD structures + PDB for validation
5. ~200-500 proteins per class

### Task: Structure-Function Prediction

**Recommended**:
1. BFVD for predicted structures (large scale)
2. PDB for experimental structures (validation)
3. UniProt for functional labels
4. Pfam for domain annotations

### Task: Host Range Prediction

**Different databases needed**:
- PhageScope (host predictions)
- MillardLab Phage-Host Database (experimental)
- NCBI (host information)
- See separate guide: "Host Range Data Collection"

## Tools for Data Processing

### Parsing PDB Files
```python
from Bio.PDB import PDBParser

parser = PDBParser()
structure = parser.get_structure('protein', 'file.pdb')
```

### Querying UniProt Programmatically
```python
import requests

def query_uniprot(protein_id):
    url = f"https://rest.uniprot.org/uniprotkb/{protein_id}"
    response = requests.get(url, headers={"Accept": "application/json"})
    return response.json()
```

### Running Pfam Scan
```bash
pfam_scan.pl -fasta proteins.fasta -dir pfam_db/ -outfile results.txt
```

## Quality Checklist

Before training your model, verify:

- [ ] All structures have pLDDT >70 (or explain why not)
- [ ] Functional labels have evidence codes
- [ ] Test set is completely separate from training
- [ ] Class balance is reasonable (not 90/10 split)
- [ ] Conflicting annotations are resolved or removed
- [ ] Data provenance is documented
- [ ] Negative examples are included (if applicable)

## Getting Help

**If you're stuck:**
1. Check if your protein class is well-represented in SwissProt
2. Consider broader functional categories initially
3. Look for domain-based classification as intermediate step
4. Reach out to database maintainers for guidance

**Community Resources:**
- UniProt help desk: responsive to queries
- Pfam forum: helpful for domain questions
- BFVD authors: contactable via paper email

## Summary

**The Golden Rule**: Quality > Quantity for phage protein ML

**Realistic Expectations**:
- Expert-curated set: 50-100 proteins per class
- Domain-based weak labels: 500-1000 proteins per class
- Time investment: 2-4 weeks for good training set
- Don't expect >80% accuracy with limited data

**Best Practice**:
Start small with high-quality curated data, validate your approach, then scale up with semi-supervised methods if needed.

---

*Last updated: March 2026*
*Questions? Open an issue on GitHub*
