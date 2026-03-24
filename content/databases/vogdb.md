---
name: VOGDB
full_name: Virus Orthologous Groups Database
version: "VOG219"
last_updated: "2023-07"
url: "http://vogdb.org"
data_types:
  - protein_families
  - orthologous_groups
  - functional_annotations
organisms:
  - viruses
  - phages
  - archaeal_viruses
vog_count: ~400000
access_methods:
  - web
  - download
  - hmm_profiles
license: open
status: active
update_frequency: "Periodic (major releases)"
citation: "Grazziotin et al., Nucleic Acids Research, 2017"
---

# VOGDB (Virus Orthologous Groups)

## Overview

VOGDB is a comprehensive database of viral protein families organized into **Virus Orthologous Groups (VOGs)**. It's like Pfam or COG, but specifically for viral proteins including phages.

**Key Statistics:**
- **VOGs (Orthologous Groups)**: ~400,000 groups
- **Proteins**: Millions of viral proteins
- **Phage Coverage**: Extensive (all RefSeq phages)
- **Functional Annotations**: ~60% of VOGs have functional predictions

## Data Composition

### What is a VOG?

A VOG (Virus Orthologous Group) is a group of proteins that:
- Share common evolutionary origin
- Have similar sequences
- Usually have similar functions
- Span across different viral taxa

### Data Sources
- **NCBI Viral RefSeq**: Primary source
- **Taxonomy**: NCBI viral taxonomy
- **Functional annotations**: From UniProt, literature, Pfam
- **HMM profiles**: For each VOG (for homology searches)

### VOG Categories

VOGs are classified by functional category:
- **Xs**: Mobilome (transposons, integrases)
- **Xr**: Replication, recombination, repair
- **Xh**: Nucleotide metabolism
- **Xt**: Transcription
- **Xp**: Packaging, head morphogenesis
- **Xl**: Lysis
- **Xu**: Unknown function

## Data Quality

### Strengths
- **Viral-Specific**: Unlike Pfam, designed for viruses
- **Comprehensive Coverage**: Includes novel phage proteins
- **HMM Profiles**: Ready-to-use for annotation pipelines
- **Functional Hierarchy**: Categories help organize unknown proteins
- **Regular Updates**: Incorporates new RefSeq releases
- **Cross-Viral**: Includes phages, archaeal viruses, eukaryotic viruses

### Limitations
- **40% Unknown Function**: Many VOGs lack functional annotation
- **Automated Clustering**: Not manually curated like Pfam
- **Varying Group Quality**: Some VOGs too broad, others too specific
- **Limited Metadata**: Less detailed than UniProt entries
- **Phylogenetic Bias**: Dominated by well-studied viral families

### Annotation Quality Breakdown

| Category | Coverage | Notes |
|----------|----------|-------|
| VOG assigned | ~95% of RefSeq proteins | Very comprehensive |
| Functional annotation | ~60% of VOGs | Better than raw RefSeq |
| Specific function | ~30% of VOGs | Many are broad categories |
| Unknown function | ~40% of VOGs | Still substantial gaps |
| HMM profile available | 100% of VOGs | For homology searches |

## Use Cases

### ✅ GOOD FOR:

1. **Annotating Novel Phage Genomes**
   - Run HMM search against VOGDB
   - Assign functions to hypothetical proteins
   - Better than generic Pfam for viral proteins

2. **Comparative Genomics**
   - Compare VOG profiles across phages
   - Identify core vs accessory functions
   - Find phage-specific vs shared functions

3. **Functional Classification**
   - Group proteins by function (even if unknown)
   - Organize genomes by functional modules
   - Track function distribution across taxa

4. **Homology Detection**
   - More sensitive than BLAST for divergent viral proteins
   - HMM profiles capture viral protein features
   - Good for finding viral homologs in metagenomes

5. **ML Feature Engineering**
   - VOG membership as features for classification
   - Functional category as weak labels
   - Better than "hypothetical protein"

### ❌ NOT GOOD FOR:

1. **Detailed Functional Annotation**
   - VOG descriptions often broad ("DNA-binding protein")
   - Use UniProt SwissProt for detailed function

2. **Experimental Evidence**
   - No evidence codes like UniProt
   - Annotations mostly computational
   - Check literature for validation

3. **Protein Structures**
   - Sequence-based only
   - Use BFVD or PDB for structures

4. **Host Range Data**
   - Focus on protein function, not phage biology
   - Use MillardLab or PhageScope

5. **Real-Time Annotation of Newest Phages**
   - Updates lag behind NCBI by months
   - For cutting-edge phages, use NCBI directly

## Access & Download

### Web Interface
- **URL**: http://vogdb.org
- **Search**: By VOG ID, protein ID, function
- **Browse**: By functional category
- **Download**: HMM profiles, protein sequences, annotations

### HMM Search (Recommended)

Download HMM profiles and run locally:

```bash
# Download VOG HMM database
wget http://fileshare.csb.univie.ac.at/vog/latest/vog.hmm.tar.gz
tar -xzf vog.hmm.tar.gz

# Run hmmsearch against your proteins
hmmsearch --tblout results.txt --cut_ga vog.hmm your_proteins.faa
```

### API/Programmatic Access
```python
# Example: Parse VOG annotations
import requests

def get_vog_annotation(vog_id):
    url = f"http://vogdb.org/api/v1/vog/{vog_id}"
    response = requests.get(url)
    return response.json()

# Example usage
vog_info = get_vog_annotation("VOG00001")
print(vog_info['functional_category'])
print(vog_info['description'])
```

### Bulk Download
- **FTP**: Available from website
- **Formats**: FASTA, HMM, TSV
- **Size**: ~10 GB total
- **Subsets**: By functional category

## Integration with Other Databases

### Cross-References
- NCBI RefSeq (protein IDs)
- Pfam (domain families)
- GO terms (limited)
- TaxIDs (NCBI taxonomy)

### Recommended Workflow

**For Annotating New Phage Genomes:**
1. Run Prodigal/GeneMark for gene calling
2. BLAST against NCBI RefSeq
3. **HMM search against VOGDB**
4. Cross-check with Pfam
5. Manual curation using UniProt for key proteins

**For ML Training:**
1. Use VOG assignments as features
2. Map to functional categories
3. Combine with Pfam domains
4. Use UniProt SwissProt for ground truth labels

## Researcher Experience

### Real-World Workflow: Phage Genome Annotation

**Goal**: Annotate a newly sequenced phage genome

**Steps**:
1. Call genes with Prodigal:
   ```bash
   prodigal -i genome.fasta -a proteins.faa
   ```

2. Search against VOGDB:
   ```bash
   hmmsearch --domtblout vog_results.txt vog.hmm proteins.faa
   ```

3. Parse results to assign VOGs:
   - Keep hits with e-value < 1e-5
   - Assign top-scoring VOG to each protein

4. Map VOGs to functional categories

**Results**:
- ~70-80% of proteins assigned to VOGs
- ~40-50% get functional categories
- ~20-30% get specific functions

**Time Investment**: 1-2 hours (mostly computation)

### Tips

1. **Use HMM, not BLAST**:
   - HMM profiles more sensitive for viral proteins
   - Better for divergent homologs

2. **Check E-values**:
   - Use conservative cutoff (1e-5 or stricter)
   - Viral proteins can have high background similarity

3. **Functional Categories are Useful**:
   - Even "unknown" VOGs give you orthology info
   - Better than nothing for "hypothetical proteins"

4. **Combine with Other Tools**:
   - VOGDB alone not enough
   - Use with Pfam, Pharokka, UniProt

5. **Beware Over-Annotation**:
   - Some VOGs are broad ("putative protein")
   - Don't assume function without additional evidence

## Updates & Maintenance

### Release History
- **VOG219** (2023-07): Latest release
- **Previous**: VOG94, VOG25, etc.
- **Update cycle**: Every 1-2 years with new RefSeq data

### Community
- Developed at University of Vienna
- Responsive to bug reports
- Used by major annotation pipelines (Pharokka, DRAM-v)

## Comparison with Similar Databases

| Database | Scope | Curation | Viral Focus |
|----------|-------|----------|-------------|
| **VOGDB** | Viral proteins | Automated | ⭐⭐⭐⭐⭐ |
| **Pfam** | All domains of life | Manual | ⭐⭐ |
| **COG** | Bacteria/Archaea | Manual | ❌ |
| **eggNOG** | All domains | Automated | ⭐ |
| **UniProt** | All domains | Mixed | ⭐⭐⭐ |

## Quality Rating

| Category | Rating | Notes |
|----------|--------|-------|
| Viral Protein Coverage | ⭐⭐⭐⭐⭐ | Most comprehensive |
| Annotation Quality | ⭐⭐⭐ | Automated, varies by VOG |
| Functional Detail | ⭐⭐ | Often broad categories |
| Update Frequency | ⭐⭐⭐ | Every 1-2 years |
| Ease of Use | ⭐⭐⭐⭐ | HMM profiles well-documented |
| Documentation | ⭐⭐⭐ | Adequate but not extensive |

## Bottom Line

VOGDB is **essential for phage genome annotation**. It's the best resource for assigning viral protein families and provides functional context even for "hypothetical proteins." The HMM profiles are more sensitive than BLAST for detecting viral homologs.

**Key Advantage**: Viral-specific protein families that Pfam misses

**Key Limitation**: Automated clustering means variable quality; ~40% still "unknown function"

**Best Practice**:
- Always use VOGDB for phage annotation
- Don't rely on it alone - combine with Pfam, UniProt
- Use HMM search, not just BLAST
- Validate functions for critical proteins

**Perfect for**: Phage genome annotation, comparative genomics, functional classification

**Combine with**: Pfam (domains), UniProt (detailed function), Pharokka (integrated pipeline)

---

*Last reviewed: March 2026*
*Contribute your experience: [GitHub Issues](#)*
