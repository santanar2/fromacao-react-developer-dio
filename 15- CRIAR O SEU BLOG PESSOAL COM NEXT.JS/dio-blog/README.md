# 📝 Meu Blog Pessoal - Com Next.js

Um blog moderno e profissional criado com **Next.js 16**, **React 19** e **Tailwind CSS**.

## ✨ Características

- ⚡ **Next.js 16** - Framework React ultramoderno
- 🎨 **Tailwind CSS 4** - Estilização utility-first
- 🌓 **Modo Escuro** - Alternância de tema dark/light
- 📱 **Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🚀 **Fast** - Otimizado para performance
- 📘 **TypeScript** - Código type-safe
- 🔍 **SEO Friendly** - Metadados e otimizações

## 🚀 Primeiros Passos

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
dio-blog/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx       # Cabeçalho do site
│   │   └── Footer.tsx       # Rodapé com tema
│   ├── blog/
│   │   └── page.tsx         # Página de todos os artigos
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Página inicial
│   └── globals.css          # Estilos globais
├── lib/
│   └── mdx.ts               # Utilitários para processar posts
├── public/
│   └── images/              # Imagens estáticas
├── posts/                   # Arquivos markdown/mdx dos artigos
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 📝 Como Adicionar Posts

1. Crie um arquivo `.md` ou `.mdx` na pasta `posts/`
2. Adicione o frontmatter no início do arquivo:

```markdown
---
title: Título do Seu Artigo
date: 2026-04-11
author: Seu Nome
excerpt: Um resumo breve do artigo
tags: [next.js, react, javascript]
---

Seu conteúdo aqui...
```

## 🎨 Customizando o Blog

### Alterar Título e Descrição

Edite `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Seu Título",
  description: "Sua descrição",
};
```

### Alterar Cores

As cores são gerenciadas pelo Tailwind CSS. Edite `tailwind.config.ts` para customização.

### Adicionar Navegação

Edite `app/components/Header.tsx` para adicionar novos links.

## 🔧 Configurações

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME=Seu Blog
NEXT_PUBLIC_SITE_URL=https://seu-blog.com
```

## 📦 Dependências

- `next` - Framework React
- `react` - Biblioteca React
- `react-dom` - Renderização React
- `tailwindcss` - Framework CSS
- `typescript` - Tipagem estática

## 📖 Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🤝 Contribuindo

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Criado como parte do curso **Criando o Seu Blog Pessoal Com Next.js** da DIO.

---

**Feito com ❤️ usando Next.js e Tailwind CSS**
