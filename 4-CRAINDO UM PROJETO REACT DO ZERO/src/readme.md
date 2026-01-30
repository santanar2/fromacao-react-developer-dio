```markdown
# 🚀 Criando um Projeto React do Zero

Projeto desenvolvido durante a formação **React Developer** da [Digital Innovation One (DIO)](https://www.dio.me/).

## 📋 Sobre o Projeto

Este projeto demonstra como criar uma aplicação React completamente do zero, sem usar `create-react-app`. Configuramos manualmente o Webpack, Babel e todas as dependências necessárias para entender o funcionamento interno de um projeto React.

## 🛠️ Tecnologias Utilizadas

- **React** 18.x - Biblioteca JavaScript para construção de interfaces
- **React DOM** 18.x - Renderização do React no navegador
- **Webpack** 5.x - Module bundler
- **Babel** - Transpilador JavaScript (ES6+ para ES5)
- **Webpack Dev Server** - Servidor de desenvolvimento com hot reload

## 📁 Estrutura do Projeto

```
4-CRAINDO UM PROJETO REACT DO ZERO/
├── node_modules/
├── public/
│   └── index.html          # Template HTML principal
├── src/
│   ├── App.jsx            # Componente principal
│   └── index.js           # Ponto de entrada da aplicação
├── .babelrc               # Configuração do Babel
├── package.json           # Dependências e scripts
├── package-lock.json      # Lock de versões das dependências
└── webpack.config.js      # Configuração do Webpack
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/santanar2/fromacao-react-developer-dio.git
```

2. Navegue até a pasta do projeto:
```bash
cd "fromacao-react-developer-dio/4-CRAINDO UM PROJETO REACT DO ZERO"
```

3. Instale as dependências:
```bash
npm install
```

### Executar em modo de desenvolvimento

```bash
npm start
```

O projeto será aberto automaticamente no navegador em `http://localhost:3000`

### Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📦 Dependências Principais

### Dependências de Produção
```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x"
}
```

### Dependências de Desenvolvimento
```json
{
  "@babel/core": "^7.x.x",
  "@babel/preset-env": "^7.x.x",
  "@babel/preset-react": "^7.x.x",
  "babel-loader": "^9.x.x",
  "css-loader": "^6.x.x",
  "html-webpack-plugin": "^5.x.x",
  "style-loader": "^3.x.x",
  "webpack": "^5.x.x",
  "webpack-cli": "^5.x.x",
  "webpack-dev-server": "^4.x.x"
}
```

## ⚙️ Configurações

### Webpack

O Webpack está configurado para:
- **Entry point**: `./src/index.js`
- **Output**: `./dist/bundle.js`
- **Dev Server**: Porta 3000 com hot reload
- **Loaders**: Babel para arquivos JS/JSX, CSS Loader e Style Loader para estilos

### Babel

Presets configurados:
- `@babel/preset-env` - Transpila JavaScript moderno
- `@babel/preset-react` - Transpila JSX

## 📚 Aprendizados

Neste projeto, aprendi a:
- ✅ Configurar Webpack do zero
- ✅ Configurar Babel para transpilar JSX e ES6+
- ✅ Estruturar um projeto React manualmente
- ✅ Entender o funcionamento interno do React e suas ferramentas
- ✅ Configurar Hot Module Replacement (HMR)

## 👨‍💻 Autor

**Seu Nome**

- GitHub: [@santanar2](https://github.com/santanar2)
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/seu-perfil)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎓 Agradecimentos

- [Digital Innovation One](https://www.dio.me/) pela excelente formação
- Comunidade React pela documentação e recursos

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
```

Agora é só:

1. **Criar o arquivo `README.md`** na raiz do projeto
2. **Colar o conteúdo acima**
3. **Ajustar as informações pessoais** (nome, LinkedIn, etc.)
4. **Salvar e fazer commit**:

```bash
git add README.md
git commit -m "docs: adiciona README completo do projeto"
git push origin main
```

