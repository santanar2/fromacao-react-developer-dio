import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 md:p-12 border border-slate-200 dark:border-slate-800">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Bem-vindo ao Meu Blog! 👋
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              Este é um blog pessoal moderno criado com <strong>Next.js 16</strong>, <strong>React 19</strong> e <strong>Tailwind CSS</strong>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Explore os artigos, aprenda sobre desenvolvimento web e acompanhe as últimas tendências em tecnologia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition font-medium">
                Ver Todos os Artigos
                <span className="ml-2">→</span>
              </Link>
              <a href="#features" className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition font-medium">
                Saiba Mais
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              O Que Você Aprenderá
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Conteúdo prático e estruturado sobre desenvolvimento web moderno
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Next.js',
                description: 'Framework React moderno com roteamento, SSR e otimização de performance',
                icon: '⚡',
              },
              {
                title: 'React',
                description: 'Biblioteca JavaScript para construir interfaces de usuário interativas',
                icon: '⚛️',
              },
              {
                title: 'Tailwind CSS',
                description: 'Framework CSS utility-first para estilização rápida e responsiva',
                icon: '🎨',
              },
              {
                title: 'TypeScript',
                description: 'Superset JavaScript com tipagem estática para código mais seguro',
                icon: '📘',
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Posts Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Últimos Artigos
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Confira as publicações mais recentes
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 border border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Nenhum artigo publicado ainda.
            </p>
            <Link href="/blog" className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:underline">
              Ver página de blog →
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 rounded-lg shadow-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Comece Sua Jornada</h2>
          <p className="text-lg mb-6 opacity-90">
            Aprenda tudo sobre desenvolvimento web moderno com Next.js
          </p>
          <Link href="/blog" className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-50 transition font-semibold">
            Explorar Conteúdo
          </Link>
        </section>
      </main>
    </div>
  );
}
