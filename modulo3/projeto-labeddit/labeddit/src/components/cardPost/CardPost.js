import React, { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalStateContext } from "../../context/GlobalStateContext";

export const CardPost = () => {
  const  {form, onChange, clearInput} = useForm({ title: "", body: ""});
  const {getPost} = useContext(GlobalStateContext)
  const auth = {
    Authorization: localStorage.getItem('token'),
}


const createPost = () => {
  axios
  .post(`${BASE_URL}/posts`, form, { headers: auth } )
  .then((res) => {
    console.log(res.data);
    clearInput();
  })
  .catch((err) => {
    console.log(err.response.data);
  });
  getPost();
  
};

const onSubmitPost = (e) => {
  e.preventDefault();
  createPost();
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
