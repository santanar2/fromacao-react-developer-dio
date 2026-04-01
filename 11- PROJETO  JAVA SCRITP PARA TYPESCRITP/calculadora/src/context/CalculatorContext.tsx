import { createContext, useState, ReactNode } from 'react';

type CalculatorContextType = {
  currentNumber: string;
  handleOnClear: () => void;
  handleAddNumber: (number: string) => void;
  handleSumNumbers: () => void;
  handleMinusNumbers: () => void;
  handleMultiplyNumbers: () => void;
  handleDivideNumbers: () => void;
  handleEquals: () => void;
};

export const CalculatorContext = createContext({} as CalculatorContextType);

type CalculatorProviderProps = {
  children: ReactNode;
};

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [currentNumber, setCurrentNumber] = useState<string>('0');
  const [firstNumber, setFirstNumber] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber(null);
    setOperation(null);
  };

  const handleAddNumber = (number: string) => {
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