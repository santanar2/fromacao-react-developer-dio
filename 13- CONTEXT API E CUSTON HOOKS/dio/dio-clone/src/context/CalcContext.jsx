import { createContext } from "react";

export const CalcContext = createContext(null);

export const CalcProvider = ({ children }) => {
  const handleSum = (a, b) => a + b;

  return (
    <CalcContext.Provider value={{ handleSum }}>
      {children}
    </CalcContext.Provider>
  );
};