import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/Coordinator";
import { ButtonGradient, ContainerFormLogin, InputStyle } from "./LoginStyle";

export const LoginForm = () => {
  const { form, onChange, clearInput } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const login = () => {
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        console.log(err.data.message);
      });

    clearInput();
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    login();
  };


  return (
    <ContainerFormLogin onSubmit={onSubmitLogin}>
      <InputStyle
        name={"email"}
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        label="E-mail"
        required
      />
      <InputStyle
        type="password"
        placeholder="Senha"
        name={"password"}
        value={form.password}
        onChange={onChange}
        label="Senha"
        min={8}
        max={30}
        required
      />

      <ButtonGradient type="submit">Logar</ButtonGradient>
    </ContainerFormLogin>
  );
};
