import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../Routes/Coordinator";


export const useProtectedPages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      alert("Usuário não logado");
      goToLoginPage(navigate);
    }
  }, [navigate]);
};

