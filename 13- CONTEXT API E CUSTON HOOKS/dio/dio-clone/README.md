📌 Projeto: Gerenciamento de Estado com Context API + Custom Hooks

Este projeto foi desenvolvido durante a formação React Developer da DIO, com o objetivo de aplicar na prática conceitos essenciais de gerenciamento de estado global e reutilização de lógica utilizando Context API e Custom Hooks.

🚀 Tecnologias utilizadas
⚛️ React
🌐 Context API
🔁 Custom Hooks
🔗 Axios
🟨 JavaScript (ES6+)
🎨 HTML5 & CSS3
🎯 Objetivo do projeto

O projeto tem como foco demonstrar na prática:

Gerenciamento de estado global com Context API
Reutilização de lógica com Custom Hooks
Separação de responsabilidades
Integração com APIs externas
Organização de código com boas práticas
🧠 Conceitos aplicados
🔹 Context API

Utilizada para compartilhar dados entre múltiplos componentes sem a necessidade de prop drilling.

Principais recursos:
createContext → Criação do contexto
Provider → Disponibiliza os dados globalmente
useContext → Consome os dados do contexto
🔹 Custom Hooks

Permitem encapsular e reutilizar lógica entre diferentes componentes.

Exemplo:
function useUser() {
  const context = useContext(UserContext);
  return context;
}
Benefícios:
Código mais limpo e reutilizável
Melhor organização
Separação de responsabilidades
🔹 Axios

Responsável por realizar requisições HTTP para APIs externas.

Exemplo:
axios.get('https://api.exemplo.com');
🔹 Hooks do React

O projeto também utiliza hooks fundamentais:

useState
useEffect
useContext
📂 Estrutura do projeto
src/
│── components/
│── context/
│   └── CalcContext.jsx
│── hooks/
│   └── useCalc.js
│── services/
│   └── api.js
│── pages/
│── styles/
│── App.js
│── index.js
⚙️ Como executar o projeto
1️⃣ Clone o repositório
git clone https://github.com/santanar2/fromacao-react-developer-dio.git
2️⃣ Acesse a pasta do projeto
cd dio-clone
3️⃣ Instale as dependências
npm install

ou

yarn
4️⃣ Execute a aplicação
npm start

ou

yarn start
📡 Funcionalidades
📊 Gerenciamento de estado global
🔄 Atualização automática da interface
🌐 Integração com APIs externas
♻️ Reutilização de lógica com Custom Hooks
💡 Aprendizados

Durante o desenvolvimento, foram consolidados conhecimentos importantes como:

Evitar prop drilling com Context API
Criar hooks reutilizáveis
Organizar projetos React de forma escalável
Aplicar boas práticas de arquitetura
📌 Considerações finais

Este projeto representa um passo importante na construção de aplicações React mais modulares, escaláveis e profissionais, preparando o terreno para arquiteturas mais robustas no desenvolvimento front-end.