import React from "react";
import logo from "../../assets/logo-dio.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper
} from "./styles";

const Header = () => {
  return (
    <Wrapper>
      <Container>

        <Row>
          <img src={logo} alt="Logo da Dio" />

          <BuscarInputContainer>
            <Input placeholder="Buscar..." />
          </BuscarInputContainer>

          <Menu href="#">Live Code</Menu>
          <Menu href="#">Global</Menu>
        </Row>

        <Row>
          <MenuRight href="#">Home</MenuRight>
          <MenuRight href="#">Entrar</MenuRight>
          <MenuRight href="#">Cadastrar</MenuRight>
        </Row>

      </Container>
    </Wrapper>
  );
};

export default Header;