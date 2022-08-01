import React, { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { InputPost, ContainerFormPost, ButtonGradient, InputTitlePost } from "./CardPostStyle";
import { Button } from "@material-ui/core";


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
    getPost();
  })
  .catch((err) => {
    console.log(err.response);
  });
    
};

const onSubmitPost = (e) => {
  e.preventDefault();
  createPost();
};
  

  return (
    <ContainerFormPost onSubmit={onSubmitPost}>
      <InputTitlePost
        name={"title"}
        value={form.title}
        onChange={onChange}
        placeholder="Título do Post"
        required
      />
      <InputPost
        name={"body"}
        value={form.body}
        onChange={onChange}
        placeholder="Escreva seu post..."
        required
      />
      <ButtonGradient type="submit">Postar</ButtonGradient>
    </ContainerFormPost>
  );
};
