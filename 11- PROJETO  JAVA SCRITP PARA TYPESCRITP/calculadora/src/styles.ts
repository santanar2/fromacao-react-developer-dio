import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;