export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="container mx-auto px-6 py-20">
        <main className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Welcome to My GitHub Pages
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              This is a Next.js website automatically deployed to GitHub Pages.
              Every push to the main branch triggers a new build and deployment.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">🚀 Features</h2>
                <ul className="text-left space-y-2 text-slate-300">
                  <li>✅ Next.js 15 with App Router</li>
                  <li>✅ TypeScript support</li>
                  <li>✅ Tailwind CSS styling</li>
                  <li>✅ Automatic GitHub Pages deployment</li>
                  <li>✅ Static site generation</li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-purple-400">⚙️ Workflow</h2>
                <ul className="text-left space-y-2 text-slate-300">
                  <li>📝 Push to main branch</li>
                  <li>🔄 GitHub Actions builds site</li>
                  <li>📦 Static files generated</li>
                  <li>🌐 Deployed to GitHub Pages</li>
                  <li>🎉 Live at username.github.io</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                🔗 View on GitHub
              </a>
            </div>
          </div>
        </main>
        
        <footer className="text-center mt-20 text-slate-400">
          <p>Built with Next.js • Deployed with GitHub Actions • Hosted on GitHub Pages</p>
        </footer>
      </div>
    </div>
  );
}
