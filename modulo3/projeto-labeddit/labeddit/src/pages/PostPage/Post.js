import React, { useContext, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { Header } from "../../components/header/Header";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {
  BoxPost,
  ButtonGradient,
  ContainerButtons,
  ContainerFormComment,
  InputComment,
  ArrowUpStyle,
  ArrowDownStyle,
} from "./PostStyle";
import up from "../../assets/img/Vector_up.svg";
import down from "../../assets/img/Vector_down.svg";

export const Post = () => {
  useProtectedPage();
  const {
    posts,
    getPosts,
    getPostsComments,
    createPostVote,
    changePostVote,
    comments,
    createCommentVote,
    changeCommentVote,
  } = useContext(GlobalStateContext);

  const { id } = useParams();
  const { form, onChange, clearInput } = useForm({ body: "" });
  const auth = {
    Authorization: localStorage.getItem("token"),
  };

  const renderIdPost =
    posts &&
    posts.map((p) => {
      if (p.id === id) {
        return (
          <BoxPost>
            <div key={p.id}>
              <p>
                <b>Enviado por: {p.username}</b>
              </p>
              <p>{p.body}</p>
            </div>
            <ContainerButtons>
              <ArrowUpStyle
                src={up}
                onClick={() => {
                  createPostVote(p.id);
                }}
              />

              {p.voteSum ? <p>{p.voteSum}</p> : <p>0</p>}
              <ArrowDownStyle
                src={down}
                onClick={() => {
                  changePostVote(p.id);
                }}
              />

              {p.commentCount ? <p>{p.commentCount}</p> : <p>0</p>}
            </ContainerButtons>
          </BoxPost>
        );
      }
    });

  const renderComments =
    comments &&
    comments.map((c) => {
      return (
        <BoxPost>
          <div key={c.id}>
            <p>
              <b>Enviado por: {c.username}</b>
            </p>
            <p>{c.body}</p>
          </div>
          <ContainerButtons>
            <img
              src={up}
              onClick={() => {
                createCommentVote(c.id);
              }}
            />

            {c.voteSum ? <p>{c.voteSum}</p> : <p>0</p>}
            <img
              src={down}
              onClick={() => {
                changeCommentVote(c.id);
              }}
            />
          </ContainerButtons>
        </BoxPost>
      );
    });

  const createComment = (id) => {
    axios
      .post(`${BASE_URL}/posts/${id}/comments`, form, { headers: auth })
      .then((res) => {
        console.log(res.data);
        clearInput();
        getPostsComments(id);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    createComment(id);
  };

  useEffect(() => {
    getPosts();
    getPostsComments(id);
  }, []);

  return (
    <div>
      <Header id={id} />
      {renderIdPost}
      <ContainerFormComment onSubmit={onSubmitComment}>
        <InputComment
          name={"body"}
          value={form.body}
          onChange={onChange}
          placeholder="Adicione um comentário"
          required
        />
        <ButtonGradient type="submit">Responder</ButtonGradient>
      </ContainerFormComment>
      {renderComments}
    </div>
  );
};
