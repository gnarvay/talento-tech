import {createContext, useState, useContext} from "react";
/* ..................................... */

const AuthContext = createContext(null);
/* ..................................... */

function AuthProvider({children}){
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem('session');
    if(saved){
      return JSON.parse(saved); 
    }
    return null;
    });

  function login(name, password){
    if(name === "admin" && password === "1234"){
      const session = {name};
      setUser(session);
      sessionStorage.setItem("session", JSON.stringify(session));
      return true;
    }
    return false;
  };

  function logout(){
    sessionStorage.removeItem('session');
    setUser(null);
    alert('cerrando sesión');
  };

  const values = {user,login,logout};
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

/* ..................................... */

function useAuthContext(){
  return useContext(AuthContext)
}

/* ..................................... */

export {AuthProvider, useAuthContext}
