import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login";
import Feed from "./pages/feed";
import { Teste } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export default App;