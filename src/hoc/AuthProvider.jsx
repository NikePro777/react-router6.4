import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };
  const signup = (cb) => {
    setUser(null);
    cb();
  };

  const value = { user, signin, signup };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
