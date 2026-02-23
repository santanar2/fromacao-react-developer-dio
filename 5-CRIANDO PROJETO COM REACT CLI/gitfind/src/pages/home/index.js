import Header from "../../components/header";
import ItemList from "../../components/ItemList";
import githubLogo from "../../assets/github.png";
import "./style.css"; // CSS da página Home, se houver

function Home() {
  return (
    <div className="container">
      <Header />

      <div className="content">

        <div className="search">
          <input name="usuario" placeholder="@username" />
          <button>Buscar</button>
        </div>

        <div className="profile">
          <img 
            src="https://avatars.githubusercontent.com/u/167146512?v=4"
            className="profile-img"
            alt="profile"
          />

          <div>
            <h3>Ricardo Honório de Santana</h3>
            <span>@santanar2</span>
            <p>Descrição</p>
          </div>
        </div>

        <hr />

        <h4>Repositórios</h4>

        <ItemList title="teste1" description="descrição teste1" />
        <ItemList title="teste2" description="descrição teste2" />
        <ItemList title="teste3" description="descrição teste3" />

      </div>

      <img src={githubLogo} alt="github" className="background-logo"/>
    </div>
  );
}

export default Home;
