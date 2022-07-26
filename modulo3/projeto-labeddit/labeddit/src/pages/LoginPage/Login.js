import React from "react";
import { LoginForm } from "./LoginForm";
import { goToRegisterPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Login</h3>
      <LoginForm />
      <button onClick={() => goToRegisterPage(navigate)}>Cadastrar-se</button>
    </div>
  );
};
