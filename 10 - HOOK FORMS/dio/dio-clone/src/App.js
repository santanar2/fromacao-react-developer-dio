import { Routes, Route } from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Login from "./pages/Login";
import Feed from "./pages/feed";


function App() {
  return (
    <Routes>
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default App;