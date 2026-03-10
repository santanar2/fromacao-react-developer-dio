import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <h1>Home</h1>

      
      <Button title="" variant="secondary" />
      <Button/>

      <Link to="/login">Ir para o login</Link>

      
    </>
  );
};

export default Home;