import { createContext, useState } from 'react';

export const CalculatorContext = createContext({});

export function CalculatorProvider({ children }) {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev =>
      prev === '0' ? number : prev + number
    );
  };

  const handleSumNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('+');
  };

  const handleMinusNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('-');
  };

  const handleMultiplyNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('*');
  };

  const handleDivideNumbers = () => {
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
    setOperation('/');
  };

  const handleEquals = () => {
    if (!firstNumber || !operation) return;

    const first = Number(firstNumber);
    const second = Number(currentNumber);

    let result = 0;

    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <CalculatorContext.Provider
      value={{
        currentNumber,
        handleOnClear,
        handleAddNumber,
        handleSumNumbers,
        handleMinusNumbers,
        handleMultiplyNumbers,
        handleDivideNumbers,
        handleEquals
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
