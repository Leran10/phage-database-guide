import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            PhageDB Knowledge Base
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Your guide to bacteriophage database resources
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Navigate the Phage Database Landscape
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive reviews, quality assessments, and practical guides to help you choose the right phage database for your research.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">14+</div>
            <div className="text-gray-600 dark:text-gray-300">Databases Reviewed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">35+</div>
            <div className="text-gray-600 dark:text-gray-300">Databases Catalogued</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15M+</div>
            <div className="text-gray-600 dark:text-gray-300">Viral Sequences</div>
          </div>
        </div>

        {/* Featured Databases */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Database Reviews (14 Total)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Link href="/databases/bfvd" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">BFVD</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">162K AlphaFold phage structures</p>
            </Link>
            <Link href="/databases/uniprot" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">UniProt</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Gold standard protein annotations</p>
            </Link>
            <Link href="/databases/vogdb" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">VOGDB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">400K viral orthologous groups</p>
            </Link>
            <Link href="/databases/ncbi-viral" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">NCBI Viral</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Authoritative genome repository</p>
            </Link>
            <Link href="/databases/imgvr" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">IMG/VR</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">15M+ metagenomic viruses</p>
            </Link>
            <Link href="/databases/pfam" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pfam</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">20K+ protein domain families</p>
            </Link>
            <Link href="/databases/pdb" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PDB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Experimental protein structures</p>
            </Link>
            <Link href="/databases/inphared" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">InPhared</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Consistent phage annotations</p>
            </Link>
            <Link href="/databases/phaster" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PHASTER</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Prophage finding tool</p>
            </Link>
            <Link href="/databases/millardlab" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">MillardLab</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Experimental host range data</p>
            </Link>
            <Link href="/databases/phagesdb" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PhagesDB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">30K+ actinobacteriophages</p>
            </Link>
            <Link href="/databases/pharokka" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pharokka</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Modern annotation pipeline</p>
            </Link>
            <Link href="/databases/prophage-db" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Prophage-DB</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">356K prophage sequences</p>
            </Link>
            <Link href="/databases/phagescope" className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">PhageScope</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">873K aggregated sequences</p>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Plus 20+ more databases catalogued - see DATABASE_CATALOG.md
            </p>
            <a
              href="https://github.com/Leran10/phage-database-guide/blob/main/DATABASE_CATALOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Full Catalog
            </a>
          </div>
        </section>

        {/* Popular Guides */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Guides
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <Link href="/guides/ml-training-data" className="block hover:bg-gray-50 dark:hover:bg-gray-750 -mx-6 -my-6 p-6 rounded-lg transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Finding Training Data for ML Models
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Learn how to curate high-quality training data for phage protein function prediction despite the "hypothetical protein" problem.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded">
                  Machine Learning
                </span>
                <span>⏱ 15 min read</span>
              </div>
            </Link>
          </div>
        </section>

        {/* Browse Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Browse by Category
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🧬</div>
              <div className="font-medium text-gray-900 dark:text-white">Genomes</div>
            </button>
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🔬</div>
              <div className="font-medium text-gray-900 dark:text-white">Proteins</div>
            </button>
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="font-medium text-gray-900 dark:text-white">Host Range</div>
            </button>
            <button className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">Annotations</div>
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-800 rounded-lg shadow-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Contribute your experience or suggest a database to review
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Submit a Review
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Request Database
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>Last updated: March 2026</p>
          <p className="mt-2">
            Built to help researchers navigate the phage database landscape
          </p>
        </div>
      </footer>
    </div>
  );
}
