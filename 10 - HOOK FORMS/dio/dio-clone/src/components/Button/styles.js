import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 22px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  position: relative;

  /* Variante Primária - Rosa (igual da DIO) */
  ${({ variant }) => variant === "primary" && css`
    background-color: #E23DD7;
    color: #FFFFFF;

    &:hover {
      background-color: #c12bb8;
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.98);
    }
  `}

  /* Variante Secundária (caso precise usar em outro lugar) */
  ${({ variant }) => variant === "secondary" && css`
    background-color: #565656;
    color: #FFFFFF;

    &:hover {
      background-color: #6b6b6b;
    }
  `}

  /* Estado desabilitado */
  &:disabled {
    background-color: #444;
    color: #888;
    cursor: not-allowed;
    transform: none;
  }
`;