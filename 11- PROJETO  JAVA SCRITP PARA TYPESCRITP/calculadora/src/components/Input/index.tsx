import React from 'react';
import { InputContainer } from './styles.ts';

type InputProps = {
  value: string;
};

const Input = ({ value }: InputProps) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
