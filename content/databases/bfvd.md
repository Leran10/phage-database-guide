---
name: BFVD
full_name: Big Fantastic Virus Database
version: "1.0"
last_updated: "2023-05"
url: "https://bigfantasticvirusdb.com"
data_types:
  - structures
  - proteins
organisms:
  - bacteriophages
  - archaeal_viruses
  - eukaryotic_viruses
size: 351073
phage_count: 162000
access_methods:
  - download
  - ftp
license: open
status: inactive
update_frequency: "No updates planned"
citation: "Biganzoli et al. 2023"
---

# BFVD (Big Fantastic Virus Database)

## Overview

BFVD is a comprehensive collection of AlphaFold-predicted viral protein structures, providing structural data for proteins that lack experimental structures in the PDB.

**Key Statistics:**
- **Total Structures**: 351,073 viral proteins
- **Phage Proteins**: ~162,000 (46% of database)
- **Archaeal Virus Proteins**: ~15,000
- **Eukaryotic Virus Proteins**: 174,000

## Data Composition

### Source Data
- **Origin**: NCBI Viral RefSeq proteins (as of 2022)
- **Clustering**: 30% sequence identity threshold (non-redundant set)
- **Format**: PDB files (AlphaFold predictions)
- **Prediction Method**: AlphaFold2

### Host Coverage
- Bacteriophages: 162,000 proteins
- Archaeal viruses: ~15,000 proteins
- Eukaryotic viruses: 174,000 proteins

## Data Quality

### Strengths
- **High Confidence Structures**: 85% of proteins have pLDDT scores >70 (high confidence)
- **Comprehensive Coverage**: Includes proteins not found in experimental PDB
- **Transmembrane Proteins**: Includes membrane proteins often difficult to crystallize
- **Structural Completeness**: Full-length protein predictions

### Limitations
- **Functional Annotations**: 90% of proteins are labeled "hypothetical protein"
- **Prediction vs Experiment**: AlphaFold predictions, not experimental structures
- **Disordered Regions**: Low confidence for intrinsically disordered regions
- **Multimeric Complexes**: Proteins predicted as monomers; may not reflect true oligomeric state
- **Limited Metadata**: No phage lifestyle, host range, or genomic context information

## Annotation Quality Breakdown

| Annotation Type | Coverage |
|----------------|----------|
| Pfam domain annotations | 35% |
| Gene Ontology (GO) terms | 12% |
| Functional keywords | 8% |
| Completely unannotated | 90% |

## Use Cases

### ✅ GOOD FOR:
- **Structure-based ML training**: Large dataset for machine learning models
- **DNA-binding domain identification**: Compatible with tools like P2Rank
- **Bulk structural screening**: High-throughput structural analysis
- **Novel protein fold discovery**: Finding unique structural motifs
- **Comparative structural genomics**: Analyzing protein family structures

### ❌ NOT GOOD FOR:
- **Functional annotations**: Use UniProt or SwissProt instead
- **Experimental validation**: Use PDB for experimentally determined structures
- **Host range data**: Use MillardLab Phage Database or VHRdb
- **Lifestyle predictions**: Use PhageScope or BACPHLIP
- **Protein-protein interactions**: No complex structures or interaction data

## Access & Download

### Download Information
- **Method**: Direct FTP download
- **Size**: ~162 GB compressed
- **Format**: Individual PDB files
- **API**: None available
- **License**: Open access

### Citation
Biganzoli, F., et al. (2023). BFVD: Big Fantastic Virus Database of predicted viral protein structures.

## Integration with Other Databases

### Cross-References
- ✅ UniProt protein IDs
- ✅ NCBI RefSeq accessions
- ❌ NOT linked to PhageScope
- ❌ NOT linked to IMG/VR
- ❌ NOT linked to NCBI viral genomes

### Recommended Workflow
1. Use BFVD for structural data
2. Cross-reference with PhageScope for genomic context
3. Use UniProt for functional annotations
4. Validate predictions with PDB where available

## Researcher Experience

### Real-World Case Study

**Project**: Training ML classifier for DNA-binding protein function (repressor vs integrase)

**Experience**:
- Downloaded full database (~162 GB)
- Found high-quality structures (85% pLDDT >70)
- Discovered 90% lack functional annotations
- Required manual curation from UniProt and literature
- Data cleaning took ~2 weeks
- Final result: Successfully trained classifier with 73.3% accuracy

**Tips**:
- Plan for significant data cleaning time
- Use Pfam domains as weak labels for training
- Filter structures by pLDDT score (>70 recommended)
- Cross-reference with UniProt for better annotations
- Expect 1-2 weeks for manual curation of training sets

## Updates & Maintenance

### Update History
- **2023-05**: v1.0 released
- **2025-12**: Confirmed no updates planned (contacted authors)

### Alternative Resources
- **AlphaFold DB**: Individual protein lookups, actively maintained
- **ESMFold**: Alternative structure predictions
- **PDB**: Experimental structures (smaller but higher quality)

## Related Databases

### Similar Structure Databases
- **AlphaFold Database**: Broader coverage, individual queries
- **PDB**: Experimental structures only
- **ESMFold Database**: Alternative predictions

### Complementary Databases for Annotations
- **UniProt/SwissProt**: Curated functional annotations
- **Pfam**: Protein domain annotations
- **InterPro**: Integrated protein signatures
- **PhageScope**: Phage genomic context and lifestyle predictions

## Quality Rating

| Category | Rating | Notes |
|----------|--------|-------|
| Structure Quality | ⭐⭐⭐⭐ | 85% high confidence |
| Annotation Completeness | ⭐ | 90% unannotated |
| Update Frequency | ⭐ | No active updates |
| Ease of Access | ⭐⭐⭐ | Simple FTP, no API |
| Documentation | ⭐⭐⭐ | Basic documentation available |
| Coverage | ⭐⭐⭐⭐⭐ | Comprehensive viral proteome |

## Bottom Line

BFVD is an excellent resource for **structural data** of viral proteins, especially for ML training and structural analysis. However, researchers should plan for significant effort in obtaining functional annotations from other sources. Best used in combination with UniProt, Pfam, and PhageScope for comprehensive protein characterization.

**Recommended For**: Computational biologists, structural bioinformatics, ML model training
**Not Recommended For**: Quick functional annotation lookups, experimental validation

---

*Last reviewed: March 2026*
*Contribute your experience: [GitHub Issues](#)*
