import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("Login:", data);
    setUser(data);
    navigate("/feed");
  };

  const handleSignOut = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};