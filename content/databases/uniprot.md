---
name: UniProt
full_name: Universal Protein Resource
version: "2026_01"
last_updated: "2026-01"
url: "https://www.uniprot.org"
data_types:
  - protein_sequences
  - functional_annotations
  - protein_families
organisms:
  - all_organisms
  - viruses
  - bacteria
phage_proteins: ~50000
access_methods:
  - web
  - api
  - download
  - ftp
license: CC BY 4.0
status: active
update_frequency: "Monthly releases"
citation: "The UniProt Consortium, Nucleic Acids Research"
---

# UniProt (Universal Protein Resource)

## Overview

UniProt is the **gold standard** for protein functional annotations. It provides comprehensive, high-quality protein sequence and functional information from across all domains of life, including viruses.

**Key Statistics:**
- **Total Proteins**: 250+ million proteins
- **Reviewed (SwissProt)**: ~570,000 manually curated
- **Viral Proteins**: Millions (including phages)
- **Phage Proteins (Reviewed)**: ~5,000-10,000 expert-curated

## Data Composition

### Two Main Sections

#### 1. **SwissProt (Reviewed)**
- **Manual curation**: Expert biologists review each entry
- **Experimental evidence**: Citations to published research
- **Quality**: Highest quality protein annotations available
- **Update frequency**: Ongoing, as new research published
- **Phage coverage**: Limited but high-quality (~5K proteins)

#### 2. **TrEMBL (Unreviewed)**
- **Automatic annotation**: Computational predictions
- **Coverage**: Comprehensive (millions of proteins)
- **Quality**: Variable, depends on source
- **Phage coverage**: Extensive but often "hypothetical protein"

### Data Sources
- NCBI RefSeq
- EMBL-EBI
- PDB (experimentally determined structures)
- Literature curation
- Direct submissions

## Data Quality

### Strengths (SwissProt)
- **Expert Curation**: Each entry manually reviewed by PhD-level scientists
- **Evidence Codes**: Clear indication of evidence type (ECO codes)
  - `ECO:0000269`: Experimental evidence
  - `ECO:0000250`: Sequence similarity
  - `ECO:0000305`: Curator inference
- **Cross-References**: Links to PDB, Pfam, InterPro, GO, etc.
- **Comprehensive Annotations**:
  - Function description
  - Catalytic activity
  - Subcellular location
  - Protein-protein interactions
  - Post-translational modifications
  - Domain architecture

### Limitations
- **Limited Phage Coverage**: Only ~10% of phage proteins reviewed
- **Annotation Lag**: New proteins take months-years to be reviewed
- **Model Organism Bias**: Well-studied phages (T4, Lambda) over-represented
- **TrEMBL Quality**: Unreviewed entries often lack functional detail

### Annotation Quality Breakdown (Phage Proteins)

| Category | SwissProt (Reviewed) | TrEMBL (Unreviewed) |
|----------|---------------------|---------------------|
| Functional description | 100% | ~15% |
| GO terms | ~90% | ~20% |
| Pfam domains | ~80% | ~35% |
| Experimental evidence | ~70% | <5% |
| "Hypothetical protein" | 0% | ~85% |

## Use Cases

### ✅ GOOD FOR:

1. **ML Training Labels (SwissProt)**
   - High-quality ground truth for supervised learning
   - Clear evidence codes to filter by confidence
   - Best source for protein function classification

2. **Literature Search**
   - Comprehensive citations to original research
   - Curated function descriptions
   - Links to review articles

3. **Protein Family Analysis**
   - Pfam domain annotations
   - InterPro signatures
   - Evolutionary relationships

4. **Cross-Database Integration**
   - Central hub linking to PDB, Pfam, NCBI, etc.
   - Consistent protein IDs (UniProt KB)
   - API for programmatic access

5. **Functional Annotation Pipeline**
   - Reference database for BLAST searches
   - Annotation transfer via homology
   - Validation of computational predictions

### ❌ NOT GOOD FOR:

1. **Comprehensive Phage Coverage**
   - Only ~10% of phage proteins reviewed
   - Missing many prophages and metagenomic phages
   - Use NCBI RefSeq or IMG/VR for coverage

2. **Structural Data**
   - Sequences only (no 3D structures)
   - Use BFVD or PDB for structures

3. **Host Range Information**
   - Not a focus of curation
   - Use MillardLab or PhageScope for host data

4. **Real-time Updates**
   - Monthly release cycle
   - Use NCBI for immediate access to new sequences

5. **Metagenomic Phages**
   - Focus on cultured organisms
   - Use IMG/VR for metagenomic viral proteins

## Access & Download

### Web Interface
- **URL**: https://www.uniprot.org
- **Search**: By protein name, organism, function, GO term, etc.
- **Filters**: Reviewed/Unreviewed, Evidence, Organism
- **Export**: FASTA, XML, TSV, GFF

### Programmatic Access

#### REST API
```bash
# Search for phage repressor proteins (reviewed only)
curl "https://rest.uniprot.org/uniprotkb/search?query=taxonomy_id:10239+AND+reviewed:true+AND+repressor&format=fasta"
```

#### Python Example
```python
import requests

def query_uniprot(query, reviewed_only=True):
    base_url = "https://rest.uniprot.org/uniprotkb/search"

    if reviewed_only:
        query += " AND reviewed:true"

    params = {
        "query": query,
        "format": "json",
        "size": 500
    }

    response = requests.get(base_url, params=params)
    return response.json()

# Example: Get phage DNA-binding proteins
results = query_uniprot("taxonomy_id:10239 AND DNA-binding", reviewed_only=True)
```

### Bulk Download
- **FTP**: ftp://ftp.uniprot.org/pub/databases/uniprot/
- **Formats**: FASTA, XML, RDF/XML
- **Subsets**: By organism, reviewed status
- **Size**:
  - SwissProt: ~500 MB (compressed)
  - TrEMBL: ~100 GB (compressed)

## Integration with Other Databases

### Cross-References In UniProt
- ✅ PDB (experimental structures)
- ✅ AlphaFold DB (predicted structures)
- ✅ Pfam (protein domains)
- ✅ InterPro (protein signatures)
- ✅ GO (Gene Ontology)
- ✅ NCBI RefSeq
- ✅ KEGG (pathways)
- ✅ STRING (interactions)

### Recommended Workflow

1. **Start with UniProt** for functional annotations
2. **Link to BFVD/AlphaFold** for structures
3. **Check Pfam** for domain details
4. **Verify in literature** using provided citations
5. **Validate with NCBI** for genomic context

## Researcher Experience

### Real-World ML Training Workflow

**Goal**: Train classifier for phage protein function

**Steps**:
1. Query UniProt SwissProt for reviewed phage proteins
   - Filter by evidence code (`ECO:0000269` for experimental)
   - Download sequences and annotations

2. Extract functional labels:
   ```python
   # Get repressors with experimental evidence
   query = "taxonomy_id:10239 AND reviewed:true AND annotation:(type:function evidence:experimental) AND repressor"
   ```

3. Quality control:
   - Check evidence codes
   - Remove "Probable" or "Putative" annotations
   - Verify citations if critical

4. Result: ~50-100 high-quality examples per functional class

**Time Investment**: 1-2 days for curating 500 proteins

### Tips from Experience

1. **Use Evidence Codes**:
   - Filter for `ECO:0000269` (experimental) for ground truth
   - Avoid `ECO:0000305` (curator inference) for training labels

2. **SwissProt vs TrEMBL**:
   - Always use SwissProt for ML training
   - Use TrEMBL only for initial discovery

3. **Functional Keywords**:
   - Search by keyword: "repressor", "integrase", "terminase"
   - Check "Function" section, not just protein name

4. **Cross-Validate**:
   - Check Pfam domains match function
   - Verify with cited papers if unexpected results

## Updates & Maintenance

### Release Schedule
- **Frequency**: Monthly (every 4 weeks)
- **Format**: YYYY_MM (e.g., 2026_01)
- **Changelog**: Available for each release

### Community
- **Help Desk**: Responsive to queries
- **Curation Requests**: Can submit proteins for review
- **Training**: Free webinars and tutorials

## Quality Rating

| Category | Rating | Notes |
|----------|--------|-------|
| Annotation Quality (SwissProt) | ⭐⭐⭐⭐⭐ | Gold standard |
| Annotation Quality (TrEMBL) | ⭐⭐ | Mostly automated |
| Phage Coverage | ⭐⭐⭐ | Limited but growing |
| Update Frequency | ⭐⭐⭐⭐ | Monthly releases |
| Ease of Access | ⭐⭐⭐⭐⭐ | Excellent API and web |
| Documentation | ⭐⭐⭐⭐⭐ | Comprehensive |
| Cross-References | ⭐⭐⭐⭐⭐ | Best in class |

## Bottom Line

UniProt (especially SwissProt) is the **gold standard** for protein functional annotations. For ML training, literature research, or functional validation, always check UniProt first. The reviewed entries are expert-curated with clear evidence codes, making them ideal for ground truth labels.

**Limitation**: Only ~10% of phage proteins are reviewed, so you'll need to supplement with other databases (Pfam, NCBI) for comprehensive coverage.

**Best Practice**:
- Use SwissProt for quality
- Use TrEMBL for coverage
- Always check evidence codes
- Cross-validate with Pfam domains

**Perfect for**: ML training labels, literature search, protein function validation

**Combine with**: BFVD (structures), Pfam (domains), NCBI (genomic context)

---

*Last reviewed: March 2026*
*Contribute your experience: [GitHub Issues](#)*
