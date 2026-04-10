Este é um projeto Next.js criado com o `create-next-app`.

## 🚀 Primeiros Passos

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo `app/page.tsx`. A página será atualizada automaticamente conforme você salva as alterações.

Este projeto utiliza o `next/font` para otimizar e carregar automaticamente a fonte Geist, uma nova família tipográfica da Vercel.

---

## 📌 Navegação no Next.js

### 📁 Estrutura de Rotas

O Next.js utiliza o sistema de App Router, onde a estrutura de pastas define as rotas:

* `app/page.tsx` → Página inicial (`/`)
* `app/login/page.tsx` → Página de login (`/login`)
* `app/auth/page.tsx` → Página de autenticação (`/auth`)
* `app/produto/page.tsx` → Página de produtos (`/produto`)
* `app/produto/[id]/page.tsx` → Página dinâmica (`/produto/:id`)
* `app/produto/categoria/page.tsx` → Página de categorias (`/produto/categoria`)

---

### 🔗 Navegação com Link

Use o componente `Link` do Next.js para navegar entre páginas:

```tsx
import Link from 'next/link';

export default function Home() {
  return (
    <nav>
      <Link href="/login">Login</Link>
      <Link href="/produto">Produtos</Link>
      <Link href="/auth">Autenticação</Link>
    </nav>
  );
}
```

---

### 🔄 Navegação Programática

Use o hook `useRouter` para navegação programática:

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function MyComponent() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/login')}>
      Ir para Login
    </button>
  );
}
```

---

## 🔐 Autenticação com NextAuth

### ⚙️ Configuração

A configuração do NextAuth está em `app/api/auth/[...nextauth]/route.ts`:

```tsx
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});

export const GET = handlers.GET;
export const POST = handlers.POST;
```

---

### 🌱 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
GITHUB_ID=seu_github_id
GITHUB_SECRET=seu_github_secret
NEXTAUTH_SECRET=sua_chave_secreta_aleatoria
NEXTAUTH_URL=http://localhost:3000
```

---

### 👤 Usando Sessão

Para acessar a sessão do usuário, use o hook `useSession()`:

```tsx
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  const session = useSession();

  if (session?.data?.user) {
    return (
      <div>
        <p>Bem-vindo, {session.data.user.email}!</p>
        <button onClick={() => signOut()}>Sair</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn('github')}>
      Entrar com GitHub
    </button>
  );
}
```

---

### 🔒 Proteger Páginas

Use middleware para proteger rotas:

```tsx
// middleware.ts
import type { NextRequest } from 'next/server';
import { auth } from '@/app/api/auth/[...nextauth]/route';

export async function middleware(request: NextRequest) {
  const session = await auth();
  
  if (!session && request.nextUrl.pathname.startsWith('/protected')) {
    return Response.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/protected/:path*'],
};
```

---

## 📚 Saiba Mais

Para aprender mais sobre Next.js, veja os seguintes recursos:

* Documentação do Next.js — funcionalidades e API
* Aprenda Next.js — tutorial interativo

Você também pode conferir o repositório no GitHub — seu feedback e contribuições são bem-vindos!

---

## 🚀 Deploy na Vercel

A forma mais fácil de publicar sua aplicação Next.js é utilizando a plataforma Vercel.

Confira a documentação de deploy para mais detalhes.
