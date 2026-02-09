import Header from "../../components/header";
import "./style.css";

function Home() {
  const background = require("../../assets/github.png").default || require("../../assets/github.png");

  return (
    <div className="App">
      <Header />

      <div className="conteudo">
        {background && (
          <img src={background} alt="github" className="github-logo" />
        )}
        <div className="background">
          
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscas</button>
          </div>
        
        </div>
        <div className="info">eu</div>
      </div>
    </div>
  );
}

export default Home;
