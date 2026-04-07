import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  line-height: 44px;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

export const TitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
  margin-bottom: 12px;
`;

export const SubTitleLogin = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  margin-bottom: 35px;
`;

export const TermoContainer = styled.div`
  margin-top: 30px;
`;

export const TermoText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #FFFFFF;
  margin-top: 12px;
`;

export const CriarText = styled.span`
  font-weight: 700;
  color: #19cc52;   /* rosa da DIO */
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Remova ou comente o TermoContainer antigo com margin-top: 450px