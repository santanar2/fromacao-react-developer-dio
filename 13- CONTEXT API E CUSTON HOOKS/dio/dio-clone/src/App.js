import { Routes, Route } from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Login from "./pages/Login";
import Feed from "./pages/feed";

import { AuthProvider } from "./context/auth";
import { CalcProvider } from "./context/CalcContext.jsx";

function App() {
  return (
    <AuthProvider>
      <CalcProvider>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </CalcProvider>
    </AuthProvider>
  );
}

export default App;