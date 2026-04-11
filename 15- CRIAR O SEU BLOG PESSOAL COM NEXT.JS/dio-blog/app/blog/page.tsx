import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Todos os Artigos
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore todos os artigos publicados do meu blog.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition">
            <div className="p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    <Link href="#" className="no-underline">
                      Primeiro Artigo do Blog
                    </Link>
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Este é um espaço reservado para seu primeiro artigo. Crie e publique seus posts aqui.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>📅 Data: Em breve</span>
                    <span>📖 Leitura: - min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Nenhum artigo publicado ainda. Comece a criar!
          </p>
          <Link href="/" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Voltar ao Início
          </Link>
        </div>
      </main>
    </div>
  );
}
