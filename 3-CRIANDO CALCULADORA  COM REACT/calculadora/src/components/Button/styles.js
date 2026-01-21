import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #1C1C1C;
  color: #FFF;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
  margin: 5px;
  cursor: pointer;
  flex: 1 0 21%;
  transition: background 0.2s;

  &:hover {
    background-color: #333;
  }
`;
