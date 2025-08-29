export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Magic of Morning Routines",
      excerpt: "Discovering the gentle rhythm of dawn and how small rituals can transform your day into something extraordinary.",
      category: "Lifestyle",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "🌅",
      tags: ["morning", "productivity", "wellness"]
    },
    {
      id: 2,
      title: "Building Digital Gardens",
      excerpt: "Creating spaces online that grow organically, where ideas bloom and knowledge takes root like seeds in fertile soil.",
      category: "Tech",
      readTime: "8 min read", 
      date: "Dec 12, 2024",
      image: "🌱",
      tags: ["digital", "learning", "growth"]
    },
    {
      id: 3,
      title: "The Art of Slow Coding",
      excerpt: "Why rushing through development is like trying to grow a forest overnight - patience and care yield better results.",
      category: "Development",
      readTime: "6 min read",
      date: "Dec 10, 2024", 
      image: "🌳",
      tags: ["coding", "philosophy", "craft"]
    }
  ];

  const quickNotes = [
    { id: 1, text: "Sometimes the most profound solutions come from the simplest observations.", emoji: "🍃" },
    { id: 2, text: "Code is poetry written in a language machines can understand.", emoji: "📝" },
    { id: 3, text: "Every bug is a teacher in disguise, waiting to share its wisdom.", emoji: "🐛" },
    { id: 4, text: "The best interfaces are like gentle breezes - you feel their effect but forget they're there.", emoji: "🌬️" }
  ];

  const recentArticles = [
    { title: "Minimalist Development Principles", date: "Dec 8", category: "Philosophy" },
    { title: "The Poetry of Clean Code", date: "Dec 5", category: "Development" },
    { title: "Digital Mindfulness Practices", date: "Dec 2", category: "Wellness" },
    { title: "Building with Nature's Patterns", date: "Nov 28", category: "Design" },
    { title: "The Rhythm of Remote Work", date: "Nov 25", category: "Lifestyle" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm border-b border-green-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌿</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Lupus Garden
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-green-700 hover:text-emerald-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-green-700 hover:text-emerald-600 font-medium transition-colors">Articles</a>
              <a href="#" className="text-green-700 hover:text-emerald-600 font-medium transition-colors">Notes</a>
              <a href="#" className="text-green-700 hover:text-emerald-600 font-medium transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to My Digital Forest 🌲
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Where thoughts grow like wildflowers and ideas take root in the fertile soil of creativity.
              This is a place for gentle exploration, mindful development, and the art of slow growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg">
                🌱 Start Exploring
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
                📖 Read Latest
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Featured Posts */}
            <section className="mb-12">
              <div className="flex items-center mb-8">
                <h3 className="text-3xl font-bold text-green-800 mr-3">Featured Stories</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-green-300 to-transparent"></div>
                <span className="ml-3 text-2xl">🌸</span>
              </div>
              
              <div className="space-y-6">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 overflow-hidden group">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-4xl">{post.image}</span>
                          <div>
                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                              {post.category}
                            </span>
                            <div className="text-sm text-green-600">
                              {post.date} • {post.readTime}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="text-2xl font-bold text-green-800 mb-3 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-green-700 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button className="text-green-600 hover:text-emerald-500 font-medium flex items-center space-x-1 transition-colors">
                          <span>Read more</span>
                          <span>→</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Quick Notes Section */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-green-800 mr-3">Garden Thoughts</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-green-300 to-transparent"></div>
                <span className="ml-3 text-xl">💭</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {quickNotes.map((note) => (
                  <div key={note.id} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{note.emoji}</span>
                      <p className="text-amber-800 italic leading-relaxed">&ldquo;{note.text}&rdquo;</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            {/* Recent Articles */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100 p-6 mb-8">
              <div className="flex items-center mb-6">
                <h3 className="text-xl font-bold text-green-800 mr-2">Recent Articles</h3>
                <span className="text-lg">📚</span>
              </div>
              
              <div className="space-y-4">
                {recentArticles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h4 className="font-medium text-green-800 text-sm mb-1">{article.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-green-600">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.category}</span>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full ml-3"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl shadow-lg border border-blue-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-800">Today&apos;s Mood</h3>
                <span className="text-3xl">🌤️</span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">Peaceful</div>
                <p className="text-blue-600 text-sm">Perfect weather for creativity and deep thinking</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-purple-200 p-6">
              <div className="text-center">
                <span className="text-3xl mb-4 block">🌺</span>
                <h3 className="text-lg font-bold text-purple-800 mb-3">Join the Garden</h3>
                <p className="text-purple-600 text-sm mb-4">
                  Get weekly doses of inspiration and gentle wisdom delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                  />
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-green-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">🌿</span>
                <span className="font-bold text-lg">Lupus Garden</span>
              </div>
              <p className="text-green-200 text-sm leading-relaxed">
                A digital space where ideas grow naturally and creativity flourishes in harmony with technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-green-200 hover:text-white transition-colors">Articles</a>
                <a href="#" className="block text-green-200 hover:text-white transition-colors">Notes</a>
                <a href="#" className="block text-green-200 hover:text-white transition-colors">Projects</a>
                <a href="#" className="block text-green-200 hover:text-white transition-colors">About</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white transition-colors">🐙 GitHub</a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">🐦 Twitter</a>
                <a href="#" className="text-green-200 hover:text-white transition-colors">💼 LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300 text-sm">
            <p>Built with Next.js 🌱 Deployed with GitHub Actions 🚀 Hosted on GitHub Pages</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
