import React from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/Coordinator";

export const LoginForm = () => {
  const [form, onChange, clearInput] = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();
    login();
  };

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

  return (
    <form onSubmit={onSubmitLogin}>
      <input
        name={"email"}
        value={form.email}
        onChange={onChange}
        label="E-mail"
        required
      />
      <input
        type="password"
        name={"password"}
        value={form.password}
        onChange={onChange}
        label="Senha"
        margin="normal"
        required
      />

      <button type="submit">Logar</button>
    </form>
  );
};
