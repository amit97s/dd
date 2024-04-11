import React from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState({
    // user: null,
    token: "",
  });

  React.useEffect(() => {
    const data = localStorage.getItem("authentication");
    if (data) {
      const parse = JSON.parse(data);
      setAuth({
        ...auth,
        // user: parse.user,
        token: parse.token,
      });
    }
  }, []);
  

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { useAuth, AuthProvider };
