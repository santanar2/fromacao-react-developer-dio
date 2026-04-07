import { MdEmail, MdLock } from "react-icons/md";

import { useContext } from "react";
import { AuthContext } from "../../context/auth";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
  

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";










import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./styles";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("O email deve ser válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

function Login() {
  const {handleLogin} = useContext(AuthContext);

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
});

  const onSubmit = async (FormData: IFormData) => {
    handleLogin(FormData);
  
};
  return (
    <>
      <Header isLoggedIn={false} />

      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>
              Faça seu login e make the change._
            </SubTitleLogin>
          </Wrapper>

          <form onSubmit={handleSubmit(onSubmit)}>
  <Input
    name="email"
    control={control}
    placeholder="E-mail"
    leftIcon={<MdEmail />}
    errorMessages={errors.email?.message}
  />

  <Input
    name="password"
    control={control}
    placeholder="Senha"
    type="password"
    leftIcon={<MdLock />}
    errorMessages={errors.password?.message}
  />

  <Button
    title="Entrar"
    variant="secondary"
    type="submit"
    disabled={!isValid}
  />
</form>
          <Row>
            <EsqueciText>Esqueci minha senha</EsqueciText>
            <CriarText>Criar conta</CriarText>
          </Row>

        </Column>
      </Container>
    </>
  );
}

export default Login;