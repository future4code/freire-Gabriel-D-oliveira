import React from "react";
import labelogo from "../../assets/img/Logo-labenu.svg";
import { goToLoginPage } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom";
import {ContainerHeader, LogoContainer, TextClicker} from './HeaderStyle'

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  const renderButton = () => {
    if (token) {
      return (
        <TextClicker
          onClick={() => {
            logout();
          }}
        >
          Logout
        </TextClicker>
      );
    } else {
      return (
        <TextClicker
          onClick={() => {
            goToLoginPage(navigate);
          }}
        >
          Entrar
        </TextClicker>
      );
    }
  };

  return (
    <ContainerHeader>
      <LogoContainer src={labelogo} alt="logo da Labenu" />
      {renderButton()}
    </ContainerHeader>
  );
};
