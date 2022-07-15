import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToAdminPage, goToHomePage } from "../../Routes/Coordinator";
import { useForm } from "../../Hooks/useForm";

export const LoginPage = () => {
  const { form, onChange } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira/login",
        form
      )
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        goToAdminPage(navigate);
      })
      .catch((err) => {
        console.log(`Deu errado: ${err.data}`);
      });
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={onSubmitLogin}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onChange}
          value={form.email}
          required
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          onChange={onChange}
          value={form.password}
          pattern={"^.{4,}"}
          title="Sua senha deve conter no mínimo 4 caracteres"
          required
        />
        <hr />
        <button>Entrar</button>
      </form>
      <button onClick={() => goToHomePage(navigate)}>Voltar</button>
    </div>
  );
};
