import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #CDCDCD;
  background-color: #00AAF0;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
