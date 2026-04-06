import { Control } from "react-hook-form";
import { IFormLogin } from "../../pages/Login/types";

import styled from "styled-components";

export const ButtonContainer = styled.button.attrs({
  type: "button",
})`
  cursor: pointer;
`;

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin>;
  name: keyof IFormLogin;
  errorMessage?: string;
}