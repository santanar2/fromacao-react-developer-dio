import Link from 'next/link';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title = 'Meu Blog', subtitle = 'Criando o Seu Blog Pessoal Com Next.js' }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <Link href="/" className="no-underline">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
              {title}
            </h1>
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {subtitle}
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
            Início
          </Link>
          <Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
