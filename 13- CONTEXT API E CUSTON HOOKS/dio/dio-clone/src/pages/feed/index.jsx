import { Link } from "react-router-dom";

import bannerImage from "../../assets/banner.png";
import Button from "../../components/Button";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Header from "../../components/Header";
import { useCalc } from "../../hooks/useCalc.js";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {

  const { handleSum } = useCalc();

  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo nome="Ricardo Santana" image="https://avatars.githubusercontent.com/u/167146512?v=4" percentual={75} />
          <UserInfo nome="Ricardo Santana" image="https://avatars.githubusercontent.com/u/167146512?v=4" percentual={50} />
          <UserInfo nome="Ricardo Santana" image="https://avatars.githubusercontent.com/u/167146512?v=4" percentual={25} />
          <UserInfo nome="Ricardo Santana" image="https://avatars.githubusercontent.com/u/167146512?v=4" percentual={15} />
          <UserInfo nome="Ricardo Santana" image="https://avatars.githubusercontent.com/u/167146512?v=4" percentual={10} />
        </Column>
      </Container>
    </>
  );
};

export default Feed;