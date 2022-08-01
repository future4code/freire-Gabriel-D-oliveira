import React from "react";
import labelogo from "../../assets/img/Logo-labenu.svg";
import { goToFeedPage, goToLoginPage } from "../../routes/Coordinator";
import {useNavigate} from "react-router-dom";
import {ContainerHeader, LogoContainer, TextClicker, ButtonReturn} from './HeaderStyle'
import returnButton from "../../assets/img/Xbutton.svg"

export const Header = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  const renderHeader = () => {
    if (token && props.id){
      return (<>
        <ButtonReturn src={returnButton} onClick={()=> goToFeedPage(navigate)}/>
        <LogoContainer src={labelogo} alt="logo da Labenu" />
          <TextClicker
            onClick={() => {
              logout();
            }}
            >
            Logout
          </TextClicker>
            </>
        )
      
    } else if (token) {
      return (<>
      <LogoContainer src={labelogo} alt="logo da Labenu" />
        <TextClicker
          onClick={() => {
            logout();
          }}
          >
          Logout
        </TextClicker>
          </>
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
      
      {renderHeader()}
    </ContainerHeader>
  );
};
