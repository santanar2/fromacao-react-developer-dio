import Header from "../../components/header";
import "./style.css";
import githubLogo from "../../assets/github.png";  // ← IMPORT CORRETO

function Home() {
  return (
    <div className="App">
      <Header />

      <div className="conteudo">
        <img src={githubLogo} alt="github" className="github-logo" />
        
        <div className="background">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          
          <div className="perfil">
            <img 
              src="https://avatars.githubusercontent.com/u/167146512?v=4" 
              className="profile"
              alt="foto"  // ← alt CORRETO aqui
            /> 
            <div className="perfil-info">
              <h3>Ricardo Honório de Santana</h3>
              <span>@santanar2</span>
              <p>Descrição</p>
            </div>   
          </div> 
          <hr className="li"/>
        </div>
        
        <div className="info"></div>
      </div>
    </div>
  );
}

export default Home;
