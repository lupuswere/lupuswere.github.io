import { getMarkdownContent, getNotesFromDirectory } from '@/lib/markdown';
import { CryptoComponents } from '../components/CryptoComponents';

export default async function Home() {
  // Load content
  const article = await getMarkdownContent('articles/main-article.md');
  const leftNotes = await getNotesFromDirectory('left');
  const rightNotes = await getNotesFromDirectory('right');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            {/* Badges */}
            <div className="flex justify-center space-x-4 mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 shadow-sm">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Vault
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-300 to-gray-500 text-gray-800 shadow-sm">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2025/08/30
              </div>
            </div>
            
            <h1 className="text-4xl font-serif text-gray-900 mb-2">
              Dragon Hill 
            </h1>
            <p className="text-gray-600 italic">
              Shamholee
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar - Notes */}
          <aside className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-serif text-red-900 mb-4 px-2">
                  Grandpa
                </h2>
                {leftNotes.map((note, index) => (
                  <div key={index} className="bg-gradient-to-br from-red-50 to-rose-100 rounded-lg shadow-sm border border-red-200 p-4">
                    <div className="border-l-4 border-red-300 pl-4">
                      <h3 className="font-medium text-red-800 text-sm mb-2 break-words">
                        {note.frontmatter.title}
                      </h3>
                      <div 
                        className="text-xs text-red-700 leading-relaxed prose break-words overflow-wrap-anywhere mb-3"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                      <div className="text-xs text-red-500 break-words">
                        {note.frontmatter.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Article */}
          <main className="lg:col-span-6">
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <header className="mb-8 border-b border-gray-100 pb-6">
                <h1 className="text-3xl font-serif text-gray-900 mb-3 leading-tight">
                  {article.frontmatter.title}
                </h1>
                {article.frontmatter.excerpt && (
                  <p className="text-lg text-gray-600 italic">
                    {article.frontmatter.excerpt}
                  </p>
                )}
                <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                  {article.frontmatter.author && (
                    <span>By {article.frontmatter.author}</span>
                  )}
                  <span>•</span>
                  <span>{article.frontmatter.date}</span>
                </div>
              </header>
              
              <div 
                className="prose text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </article>
          </main>

          {/* Right Sidebar - Notes */}
          <aside className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-serif text-blue-900 mb-4 px-2">
                  Balcony
                </h2>
                {rightNotes.map((note, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-lg shadow-sm border border-blue-200 p-4">
                    <div className="border-l-4 border-blue-300 pl-4">
                      <h3 className="font-medium text-blue-800 text-sm mb-2 break-words">
                        {note.frontmatter.title}
                      </h3>
                      <div 
                        className="text-xs text-blue-700 leading-relaxed prose break-words overflow-wrap-anywhere mb-3"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                      <div className="text-xs text-blue-500 break-words">
                        {note.frontmatter.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Crypto Components */}
              <CryptoComponents />
            </div>
          </aside>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="border-b border-gray-700 pb-6 mb-6">
            <h3 className="text-xl font-serif text-white mb-2">Shamholee</h3>
            <p className="text-gray-400 text-sm">
              Preserving the art of thoughtful creation in the digital age
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
