📌 Componente Teste com Hooks (React)
📁 Estrutura do Projeto

O componente foi criado em:

/pages/login/index.jsx
⚙️ Objetivo do Componente

Este componente demonstra o uso de hooks do React para:

Gerenciar estado

Executar efeitos colaterais

Otimizar cálculos

Otimizar funções

🧠 Hooks Utilizados
🔹 useState
const [name, setName] = useState('Ricardo');
const [age, setAge] = useState(30);

Responsável por armazenar e atualizar estados do componente:

name: nome exibido na tela

age: idade exibida

🔹 useEffect
useEffect(() => {
  console.log('O nome mudou para: ', name);
}, [name]);

Executa um efeito sempre que o valor de name for alterado.

📌 Uso:

Logs

Requisições API

Monitoramento de mudanças

🔹 useMemo
const greeting = useMemo(() => {
  return `Olá, ${name}!`;
}, [name]);

const ageText = useMemo(() => {
  return `Idade: ${age}`;
}, [age]);

Memoriza valores para evitar reprocessamento desnecessário.

📌 Ideal para:

Cálculos pesados

Otimização de performance

🔹 useCallback
const handleChangeNameMemo = useCallback(() => {
  setName(prev => (prev === 'Ricardo' ? 'Elaine' : 'Ricardo'));
}, []);

const handleChangeAgeMemo = useCallback(() => {
  const newAge = 10 * age;
  console.log('age atual: ', age, 'novo cálculo:', newAge);

  setAge(prev => (prev === 30 ? 25 : 30));
}, [age]);

Memoriza funções para evitar recriação a cada renderização.

📌 Útil quando:

Funções são passadas para componentes filhos

Há necessidade de otimização

🔁 Funcionalidades

Alterna o nome entre Ricardo e Elaine

Alterna a idade entre 30 e 25

Exibe mensagem personalizada

Mostra log no console ao alterar o nome

Realiza um cálculo adicional com a idade (newAge)

🧩 Código do Componente
import { useState, useEffect, useMemo, useCallback } from 'react';

const Teste = () => {
  const [name, setName] = useState('Ricardo');
  const [age, setAge] = useState(30);

  const handleChangeAge = () => {
    setAge(prev => prev === 30 ? 25 : 30);
  };

  useEffect(() => {
    console.log('O nome mudou para: ', name);
  }, [name]);

  const greeting = useMemo(() => {
    return `Olá, ${name}!`;
  }, [name]);

  const ageText = useMemo(() => {
    return `Idade: ${age}`;
  }, [age]);

  const handleChangeNameMemo = useCallback(() => {
    setName(prev => (prev === 'Ricardo' ? 'Elaine' : 'Ricardo'));
  }, []);

  const handleChangeAgeMemo = useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual: ', age, 'novo cálculo:', newAge);

    setAge(prev => (prev === 30 ? 25 : 30));
  }, [age]);

  return (
    <div>
      <p>{greeting}</p>
      <p>{ageText}</p>

      <button onClick={handleChangeNameMemo}>Mudar Nome</button> <br />
      <button onClick={handleChangeAgeMemo}>Mudar Idade</button>
    </div>
  );
};

export { Teste };
🌐 Integração no App.js
Importação:
import { Teste } from "./pages/index";
Rota:
<Route path="/teste" element={<Teste />} />
🚀 Como acessar

No navegador:

http://localhost:3000/teste
💡 Boas Práticas

Use useMemo e useCallback apenas quando necessário

Evite otimização prematura

Prefira código simples quando possível

📌 Conclusão

Este exemplo demonstra na prática:

Controle de estado com useState

Monitoramento com useEffect

Otimização com useMemo e useCallback

Estruturação de componentes React