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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-serif text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  Grandpa
                </h2>
                <div className="space-y-4">
                  {leftNotes.map((note, index) => (
                    <div key={index} className="border-l-4 border-amber-200 pl-4">
                      <h3 className="font-medium text-gray-900 text-sm mb-1">
                        {note.frontmatter.title}
                      </h3>
                      <div 
                        className="text-xs text-gray-600 leading-relaxed prose"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                      <div className="text-xs text-gray-400 mt-2">
                        {note.frontmatter.date}
                      </div>
                    </div>
                  ))}
                </div>
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-serif text-gray-900 mb-4 border-b border-gray-100 pb-2">
                  Balcony
                </h2>
                <div className="space-y-4">
                  {rightNotes.map((note, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-4">
                      <h3 className="font-medium text-gray-900 text-sm mb-1">
                        {note.frontmatter.title}
                      </h3>
                      <div 
                        className="text-xs text-gray-600 leading-relaxed prose"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                      <div className="text-xs text-gray-400 mt-2">
                        {note.frontmatter.date}
                      </div>
                    </div>
                  ))}
                </div>
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
