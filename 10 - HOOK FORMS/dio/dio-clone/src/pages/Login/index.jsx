import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { api } from "../../services/api"; 

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
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
  resolver: yupResolver(schema),
  mode: "onChange",
});

  const onSubmit = async (data) => {
  try {
    const response = await api.get(`/users?email=${data.email}`);

    const user = response.data[0];

    if (user && user.password === data.password) {
      // Salva o usuário logado (importante para depois)
      localStorage.setItem("user", JSON.stringify(user));
      
      alert("Login realizado com sucesso!");
      navigate("/feed");
    } else {
      alert("Email ou senha inválidos!");
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao fazer login. Tente novamente.");
  }
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