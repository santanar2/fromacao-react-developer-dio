import React from 'react';
import { ButtonContainer } from './styles.ts';
import { IButton } from './types.ts';

const Button = ({ label, onClick }: IButton) => {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

export default Button;
