import React, { useState } from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/Coordinator";
import { InputStyle, ButtonGradient, ContainerFormLogin, ContainerCheckBox } from "./RegisterStyle";

export const RegisterForm = () => {
  const {form, onChange, clearInput} = useForm({ username: "", email: "", password: ""});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  
  const handleOnChangeCheckBox = () => {
    setChecked(!checked);
  };

  const headerSignup = 'Content-Type: application/json'

  const signup = () => {
    axios
    .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeedPage(navigate);
      })
      .catch((err) => {
        alert("Erro ao cadastrar o usuário:" );
      });
      
    };
    
      const onSubmitRegister = (e) => {
        e.preventDefault();
        signup();
      };
    ;

  console.log(form)

  return (
    <ContainerFormLogin onSubmit={onSubmitRegister}>
      <InputStyle
        name={"username"}
        value={form.username}
        onChange={onChange}
        label="Username"
        placeholder="Usuário"
        required
      />
      <InputStyle
        type="email"
        name={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="E-mail"
        label="E-mail"
        required
      />
      <InputStyle
        type="password"
        name={"password"}
        value={form.password}
        onChange={onChange}
        placeholder="Senha"
        label="Senha"
        min={8}
        max={30}
        required
      />
      <ContainerCheckBox>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleOnChangeCheckBox}
          required
        />
        Concordo com os termos e licensa do aplicativo
      </ContainerCheckBox>
      <ButtonGradient type="submit">Registrar</ButtonGradient>
    </ContainerFormLogin>
  );
};
