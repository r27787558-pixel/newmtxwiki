export default function Sidebar({ articles, currentId, onSelectArticle, searchQuery, setSearchQuery }) {
  const categories = [...new Set(articles.map(item => item.category))];

  const filteredArticles = articles.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-64 bg-slate-900 text-slate-100 h-screen p-4 flex flex-col border-r border-slate-800 shrink-0">
      <div className="mb-6">
        <h1 className="text-xl font-bold tracking-wide text-blue-400">MTX Wiki</h1>
        <input
          type="text"
          placeholder="搜索文档..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-3 w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded text-sm focus:outline-none focus:border-blue-500 text-slate-100 placeholder-slate-500"
        />
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto">
        {categories.map(category => {
          const categoryArticles = filteredArticles.filter(a => a.category === category);
          if (categoryArticles.length === 0) return null;

          return (
            <div key={category}>
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                {category}
              </h2>
              <ul className="space-y-1">
                {categoryArticles.map(article => (
                  <li key={article.id}>
                    <button
                      onClick={() => onSelectArticle(article.id)}
                      className={`w-full text-left px-3 py-1.5 rounded text-sm transition-colors ${
                        currentId === article.id
                          ? "bg-blue-600 text-white font-medium"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      {article.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
