import { useState } from "react";
import Header from "../../components/header";
import ItemList from "../../components/ItemList";
import githubLogo from "../../assets/github.png";
import "./style.css";

function Home() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetData = async () => {
    // 🔒 Não faz nada se estiver vazio
    if (!user.trim()) {
      setError("Digite um usuário para buscar.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${user}`
      );

      if (!userResponse.ok) {
        setError("Usuário não encontrado.");
        setLoading(false);
        return;
      }

      const userData = await userResponse.json();

      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos`
      );

      const repoData = await repoResponse.json();

      // 🔥 Só atualiza se tudo deu certo
      setCurrentUser(userData);
      setRepositories(repoData);

    } catch (err) {
      setError("Erro ao buscar dados.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <Header />

      <div className="content">

        {/* 🔎 Busca */}
        <div className="search">
          <input
            name="usuario"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="@username"
          />
          <button onClick={handleGetData} disabled={loading}>
            {loading ? "Carregando..." : "Buscar"}
          </button>
        </div>

        {/* ❌ Mensagem de erro */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* 👤 Perfil */}
        {currentUser && (
          <div className="profile">
            <img
              src={currentUser.avatar_url}
              className="profile-img"
              alt="profile"
            />

            <div>
              <h3>{currentUser.name || ""}</h3>
              <span>@{currentUser.login}</span>
              <p>{currentUser.bio || "Sem descrição disponível"}</p>
              <p>
                Seguidores: {currentUser.followers} | 
                Seguindo: {currentUser.following} | 
                Repositórios: {currentUser.public_repos}
              </p>
            </div>
          </div>
        )}

        {currentUser && <hr />}

        {/* 📦 Repositórios */}
        {repositories.length > 0 && (
          <>
            <h4>Repositórios</h4>

            {repositories.map((repo) => (
              <ItemList
                key={repo.id}
                title={repo.name}
                description={repo.description || "Sem descrição"}
              />
            ))}
          </>
        )}
      </div>

      <img
        src={githubLogo}
        alt="github"
        className="background-logo"
      />
    </div>
  );
}

export default Home;
