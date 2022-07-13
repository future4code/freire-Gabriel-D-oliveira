import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToLoginPage, goToTripDetails } from "../../Routes/Coordinator";

export const LoginPage = () => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const navigate = useNavigate();

  const handleInputUser = (event) => {
    setInputUser(event.target.value);
  };
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: inputUser,
      password: inputPassword,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        
      })
      .catch((err) => {
        console.log(`Deu errado: ${err.data}`);
      });
  };

  return (
    <div>
      <p>Login</p>
      <input
        type="text"
        placeholder="User"
        onChange={handleInputUser}
        value={inputUser}
      />
      <input
        type="text"
        placeholder="Passaword"
        onChange={handleInputPassword}
        value={inputPassword}
      />
      <hr />
      <button onClick={onSubmitLogin}>Entrar</button>
    </div>
  );
};
