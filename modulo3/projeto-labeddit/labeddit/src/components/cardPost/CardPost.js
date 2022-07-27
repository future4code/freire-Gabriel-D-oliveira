import React from "react";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { auth } from "../../constants/requestConstants";

export const CardPost = () => {
  const  {form, onChange, clearInput} = useForm({ title: "", body: "" });

  const onSubmitPost = (e) => {
    e.preventDefault();
    createPost();
  };

  const createPost = () => {
    axios
      .post(`${BASE_URL}/posts`, { headers: auth }, form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  console.log(form);
  console.log(auth);

  return (
    <form onSubmit={onSubmitPost}>
      <input
        name={"title"}
        value={form.title}
        onChange={onChange}
        placeholder="Título do Post"
        required
      />
      <input
        name={"body"}
        value={form.body}
        onChange={onChange}
        placeholder="Escreva seu post..."
        required
      />
      <button type="submit">Postar</button>
    </form>
  );
};
