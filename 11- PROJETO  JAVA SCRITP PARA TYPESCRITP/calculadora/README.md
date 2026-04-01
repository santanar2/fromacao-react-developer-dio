# 🧮 Calculadora React + TypeScript

Aplicação de calculadora desenvolvida com **React JS** e **TypeScript**, convertida de JavaScript para TypeScript com o objetivo de praticar conceitos fundamentais do desenvolvimento Front-end moderno, como gerenciamento de estado, manipulação de eventos, construção de interfaces interativas e **tipagem estática com TypeScript**.

---

## 🚀 Demonstração

Esta aplicação simula o funcionamento de uma calculadora tradicional, permitindo ao usuário realizar operações matemáticas básicas de forma dinâmica.

---

## 🧠 Conceitos Trabalhados

* Gerenciamento de estado com **useState**
* Tipagem com **TypeScript** (types, interfaces)
* **Context API** para gerenciamento global de estado
* Componentização em React
* Manipulação de eventos
* Renderização dinâmica de dados
* Organização de layout com **Styled Components**
* Lógica de operações matemáticas
* Conversão de JavaScript para TypeScript
* Tipos para Props de componentes
* Boas práticas em React com TypeScript

---

## 💻 Tecnologias Utilizadas

* React JS
* **TypeScript**
* HTML5
* CSS3
* **Styled Components** (para estilos)
* Node.js
* npm (gerenciador de pacotes)
* Git e GitHub

---

## ⚙️ Funcionalidades

✅ Inserção de números
✅ Operações básicas (+ − × ÷)
✅ Cálculo do resultado
✅ Botão para limpar visor
✅ Interface simples e funcional

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── components/
 │    ├── Button/
 │    │    ├── index.tsx
 │    │    ├── styles.ts
 │    │    └── types.ts
 │    └── Input/
 │         ├── index.tsx
 │         └── styles.ts
 ├── context/
 │    └── CalculatorContext.tsx
 ├── App.tsx
 ├── index.tsx
 ├── global.tsx
 └── styles.ts
```

---

## 🔄 Conversão de JavaScript para TypeScript

Este projeto foi **convertido de JavaScript para TypeScript**, implementando:

### ✨ Principais Melhorias:

- **Types e Interfaces**: Definição de tipos para Props de componentes e variáveis
- **Context com Tipagem**: Context API totalmente tipada com tipos genéricos
- **Segurança de Tipos**: Detecção de erros em tempo de desenvolvimento
- **Documentação Automática**: Tipos servem como documentação do código
- **IntelliSense Melhorado**: Autocompletar mais preciso no editor

### 📝 Exemplo de Tipagem:

```typescript
// types.ts - Definição de tipos para o Button
export interface IButton {
  label: string;
  onClick: () => void;
}

// index.tsx - Uso do tipo no componente
const Button = ({ label, onClick }: IButton) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};
```

---

## ▶️ Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/santanar2/fromacao-react-developer-dio.git
```

Entre na pasta da calculadora:

```bash
cd 3-CRIANDO-CALCULADORA-COM-REACT/calculadora
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm start
```

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para consolidar conhecimentos em React com TypeScript, com foco na:
- 🎯 Criação de aplicações interativas com segurança de tipos
- 🎯 Integração de **Context API** para estado global
- 🎯 Organização de componentes reutilizáveis com tipagem forte
- 🎯 Uso de **Styled Components** para estilização componentizada
- 🎯 Melhores práticas de desenvolvimento TypeScript em React

---

## 👨‍💻 Autor

**Ricardo Honório de Santana**

🎓 Estudante de Análise e Desenvolvimento de Sistemas
💻 Técnico em Telecomunicações e Redes
🚀 Em transição para Desenvolvimento Front-end

---

⭐ Se este projeto te ajudou ou foi interessante, deixe uma estrela no repositório!

