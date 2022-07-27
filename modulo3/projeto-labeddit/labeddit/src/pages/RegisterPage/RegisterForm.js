import React, { useState } from "react";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../../routes/Coordinator";

export const RegisterForm = () => {
  const {form, onChange, clearInput} = useForm({ username: "", email: "", password: ""});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const onSubmitRegister = (e) => {
    e.preventDefault();
    signup();
  };

  const handleonChangeCheckBox = () => {
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
      .catach((err) => {
        alert("Erro ao cadastrar o usuário:" );
      });

    ;
  };

  console.log(form)

  return (
    <form onSubmit={onSubmitRegister}>
      <input
        name={"username"}
        value={form.username}
        onChange={onChange}
        label="Username"
        placeholder="Usuário"
        required
      />
      <input
        type="email"
        name={"email"}
        value={form.email}
        onChange={onChange}
        placeholder="E-mail"
        label="E-mail"
        required
      />
      <input
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
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleonChangeCheckBox}
          required
        />
        "Concordo com os termos e licensa do aplicativos"
      </label>
      <button type="submit">Registrar</button>
    </form>
  );
};
