import {useAuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";

export function RutaProtegida({children}){
  const {user} = useAuthContext();
  if(!user){
    return <Navigate to="/" replace />;
  }
  return children;
}