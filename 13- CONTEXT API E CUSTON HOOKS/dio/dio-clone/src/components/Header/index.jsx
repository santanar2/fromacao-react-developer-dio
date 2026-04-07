import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"; // opcional

import { 
  Container, 
  Logo, 
  Nav, 
  NavLink, 
  UserAvatar 
} from "./styles";

function Header({ isLoggedIn = false }) {  // ← adicionamos essa prop
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        dio<span>.</span>
      </Logo>

      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/login">Entrar</NavLink>
        <NavLink href="/cadastro" active>Cadastrar</NavLink>

        {isLoggedIn && (
          <UserAvatar 
            src="https://via.placeholder.com/40" 
            alt="Perfil" 
            onClick={() => navigate("/feed")}
          />
        )}
      </Nav>
    </Container>
  );
}

export default Header;