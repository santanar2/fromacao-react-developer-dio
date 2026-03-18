import React from "react";
import logo from "../../assets/logo-dio.png";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from "./styles";

const Header = (autenticado) => {
  return (
    <Wrapper>
      <Container>

        <Row>
          <img src={logo} alt="Logo da Dio" />
          {autenticado ? (
            <>
            <BuscarInputContainer>
            <Input placeholder="Buscar..." />
            </BuscarInputContainer>
            <Menu href="#">Live Code</Menu>
            <Menu href="#">Global</Menu>
          </>
          ) : null}
        </Row>

        <Row> 
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/167146512?v=4" />
          ) : (
            <>           
          <MenuRight href="#">Home</MenuRight>
          <MenuRight href="#">Entrar</MenuRight>
          <MenuRight href="#">Cadastrar</MenuRight>
          </>
          )}
        </Row>

      </Container>
    </Wrapper>
  );
};

export default Header;