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
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-300">Databases Reviewed</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1+</div>
            <div className="text-gray-600 dark:text-gray-300">Use Case Guides</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-300">Phages Catalogued</div>
          </div>
        </div>

        {/* Featured Databases */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Databases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BFVD Card */}
            <Link href="/databases/bfvd" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    BFVD
                  </h4>
                  <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                    Structures
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  162,000 AlphaFold-predicted phage protein structures
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span>
                    <span>85% high confidence structures</span>
                  </div>
                  <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                    <span className="mr-2">⚠</span>
                    <span>90% lack functional annotations</span>
                  </div>
                </div>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium">
                  Read full review →
                </div>
              </div>
            </Link>

            {/* PhageScope Card */}
            <Link href="/databases/phagescope" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    PhageScope
                  </h4>
                  <span className="px-2 py-1 text-xs font-medium bg-blue-200 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                    Genomes
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  873,718 phage sequences with comprehensive annotations
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span>
                    <span>Largest aggregated database</span>
                  </div>
                  <div className="flex items-center text-green-600 dark:text-green-400">
                    <span className="mr-2">✓</span>
                    <span>Lifestyle & host predictions</span>
                  </div>
                </div>
                <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium">
                  Read full review →
                </div>
              </div>
            </Link>
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
