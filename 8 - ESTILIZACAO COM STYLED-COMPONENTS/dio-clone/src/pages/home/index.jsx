import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <Button title="Teste1" />
      <Button title="Teste2" variant="secondary" />

      <Link to="/login">Ir para o login</Link>

      
    </>
  );
};

export default Home;