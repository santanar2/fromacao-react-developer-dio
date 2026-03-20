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