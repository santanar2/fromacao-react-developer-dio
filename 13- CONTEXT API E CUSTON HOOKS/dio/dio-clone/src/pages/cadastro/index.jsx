import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";

import { api } from "../../services/api";   // ←←← ESTA LINHA ESTAVA FALTANDO

import {
  Column,
  Container,
  CriarText,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  TermoText,
  TermoContainer,
} from "./styles";

const schema = yup.object().shape({
  nome: yup.string().required("O nome completo é obrigatório"),
  email: yup
    .string()
    .email("O email deve ser válido")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

function Cadastro() {   // ← Mudei o nome da função para Cadastro (melhor prática)
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

    const onSubmit = async (data) => {
    try {
      console.log("Dados enviados:", data);   // ← ajuda a ver se está pegando os dados

      // Verifica se o email já existe
      const checkEmail = await api.get(`/users?email=${data.email}`);
      
      if (checkEmail.data.length > 0) {
        alert("Este email já está cadastrado!");
        return;
      }

      // Cria o novo usuário
      const response = await api.post("/users", {
        name: data.nome,
        email: data.email,
        password: data.password,
      });

      console.log("Usuário criado com sucesso:", response.data);

      alert("Conta criada com sucesso! Agora faça o login.");
      navigate("/login");

    } catch (error) {
      console.error("Erro completo ao criar conta:", error);

      if (error.response) {
        alert(`Erro do servidor: ${error.response.status}`);
      } else if (error.request) {
        alert("Não foi possível conectar ao json-server. Verifique se ele está rodando na porta 5000.");
      } else {
        alert("Erro ao criar conta: " + error.message);
      }
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>
              Crie sua conta e make the change._
            </SubTitleLogin>
          </Wrapper>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="nome"
              control={control}
              placeholder="Nome completo"
              leftIcon={<MdPerson />}
              errorMessages={errors.nome?.message}
            />

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
              placeholder="Password"
              type="password"
              leftIcon={<MdLock />}
              errorMessages={errors.password?.message}
            />

            <Button
              title="Criar minha conta"
              variant="primary"
              type="submit"
              disabled={!isValid}
            />
          </form>

          <TermoContainer>
            <TermoText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de
              Privacidade e os Termos de Uso da DIO.
            </TermoText>

            <TermoText>
              Já tenho conta.{" "}
              <CriarText onClick={() => navigate("/login")}>
                Fazer login
              </CriarText>
            </TermoText>
          </TermoContainer>
        </Column>
      </Container>
    </>
  );
}

export default Cadastro;