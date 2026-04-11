# 📊 Estrutura do Projeto - Documentação

## Visão Geral

Projeto de blog moderno criado com **Next.js 16**, **React 19** e **Tailwind CSS 4**.

## 🗂️ Organização de Pastas

### `/app` - Aplicação Next.js (App Router)
```
app/
├── components/          # Componentes React reutilizáveis
│   ├── Header.tsx      # Navegação e cabeçalho
│   └── Footer.tsx      # Rodapé com alternador de tema
├── blog/
│   └── page.tsx        # Página /blog - listagem de artigos
├── layout.tsx          # Layout raiz da aplicação
├── page.tsx            # Página inicial /
└── globals.css         # Estilos globais (Tailwind)
```

**Características:**
- App Router (novo padrão Next.js)
- Server Components por padrão
- Layout compartilhado

### `/lib` - Utilitários e Lógica
```
lib/
└── mdx.ts             # Funções para processar posts em Markdown
  - parseFrontmatter() # Extrai YAML frontmatter
  - calculateReadingTime() # Estima tempo de leitura
  - formatDate()       # Formata datas em português
```

### `/posts` - Conteúdo do Blog
```
posts/
└── bem-vindo-ao-blog.md  # Artigo exemplo em Markdown
```

**Formato:**
```markdown
---
title: Título do Artigo
date: 2026-04-11
author: Seu Nome
excerpt: Resumo
tags: [tag1, tag2]
---

# Conteúdo aqui...
```

### `/public` - Assets Estáticos
```
public/
├── favicon.ico        # Ícone do site
└── images/            # Lugar para imagens do blog
```

### `/node_modules` - Dependências
Instaladas via `npm install`

## 📦 Dependências Principais

```json
{
  "next": "16.2.3",           // Framework React
  "react": "19.2.4",          // Biblioteca UI
  "react-dom": "19.2.4",      // Renderização React
  "tailwindcss": "4",         // Framework CSS
  "@tailwindcss/postcss": "4" // CSS utilities
}
```

## 🔧 Arquivos de Configuração

| Arquivo | Propósito |
|---------|-----------|
| `next.config.ts` | Configurações do Next.js |
| `tailwind.config.ts` | Configurações do Tailwind |
| `tsconfig.json` | Configurações do TypeScript |
| `eslint.config.mjs` | Regras de linting |
| `postcss.config.mjs` | Processador CSS |
| `.env.example` | Variáveis de ambiente (template) |
| `.gitignore` | Arquivos ignorados pelo Git |

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Iniciar servidor de desenvolvimento
npm run build    # Compilar para produção
npm start        # Iniciar servidor produção
npm run lint     # Verificar código
```

## 🌐 Rotas da Aplicação

| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `app/page.tsx` | Página inicial |
| `/blog` | `app/blog/page.tsx` | Listagem de artigos |

## 📝 Como Adicionar um Novo Post

1. Crie um arquivo na pasta `posts/`:
   ```bash
   posts/meu-novo-artigo.md
   ```

2. Adicione o frontmatter e conteúdo:
   ```markdown
   ---
   title: Meu Novo Artigo
   date: 2026-04-15
   author: Seu Nome
   excerpt: Descrição breve
   tags: [javascript, next.js]
   ---
   
   # Conteúdo do artigo...
   ```

## 🎨 Customizações Comuns

### Mudar Tema de Cores
`tailwind.config.ts` - Modifique a paleta de cores

### Adicionar Fontes
`app/layout.tsx` - Use `next/font/google`

### Alterar Metadata
`app/layout.tsx` - Edite o objeto `metadata`

### Adicionar Navegação
`app/components/Header.tsx` - Adicione links

## 💾 Salvando em Git

```bash
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

## 🐛 Troubleshooting

### Porta 3000 em uso
```bash
# Mata o processo na porta 3000
taskkill /F /IM node.exe
npm start
```

### Build falha
```bash
rm -rf .next/
npm run build
```

### Dependências desatualizadas
```bash
npm update
npm install
```

## 📚 Próximas Etapas

- [ ] Customizar cores e fontes
- [ ] Adicionar seus artigos
- [ ] Implementar search de posts
- [ ] Adicionar comentários
- [ ] Deploy em produção
- [ ] Adicionar analytics

---

**Desenvolvido com ❤️ durante o curso DIO**
