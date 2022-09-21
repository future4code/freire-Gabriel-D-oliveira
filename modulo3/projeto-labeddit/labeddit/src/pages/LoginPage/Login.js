import React from "react";
import { LoginForm } from "./LoginForm";
import { goToRegisterPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";
import  logoRegister  from "../../assets/img/Logo-register.svg";
import { ButtonRegister, LineGradient, ContainerLogin, LogoContainer } from "./LoginStyle";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <LogoContainer src={logoRegister} alt='logo Labenu'/>
      <ContainerLogin>
      <LoginForm/>
      <LineGradient/>
      <ButtonRegister onClick={() => goToRegisterPage(navigate)}>Cadastrar-se</ButtonRegister>
      </ContainerLogin>
    </div>
  );
};
