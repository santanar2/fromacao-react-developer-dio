import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const useCalc = () => {
  return useContext(CalcContext);
};