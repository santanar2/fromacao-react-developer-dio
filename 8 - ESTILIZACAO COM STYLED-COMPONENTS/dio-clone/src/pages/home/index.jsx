import { Link } from "react-router-dom";

import bannerImage from "../../assets/banner.png";

import Button from "../../components/Button";
import Header from "../../components/Header";

import { Container, TextContainer, Title, TitleHighlight } from "./styles";

const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>

          <TextContainer>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContainer>

          <Button title="Comece agora" />
        </div>

        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;