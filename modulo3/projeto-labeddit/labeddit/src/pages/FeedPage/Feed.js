import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getPosts } from "../../context/GlobalState";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { CardPost } from "../../components/cardPost/CardPost";
import { useNavigate } from "react-router-dom";
import { goToPostPage } from "../../routes/Coordinator";
import { Header } from "../../components/header/Header";
import { BoxPost, ContainerButtons, LineDivision, PrimaryTextContent } from "./FeedStyle";
import up from "../../assets/img/Vector_up.svg";
import down from "../../assets/img/Vector_down.svg";

export const Feed = () => {
  useProtectedPage();
  const {
    posts,
    getPosts,
    createPostVote,
    changePostVote,
    getPostsComments,
    deletePostVote,
    voted,
  } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const renderFeed =
    posts &&
    posts.map((p) => {
      return (
        <BoxPost>
          <PrimaryTextContent key={p.id} onClick={() => goToPostPage(navigate, p.id)}>
            <p>
              <b>Enviado por: {p.username}</b>
            </p>
            <p>{p.body}</p>
          </PrimaryTextContent>
          <ContainerButtons>
            {voted ? (
              <img
                src={up}
                alt="seta para cima"
                onClick={() => {
                  createPostVote(p.id);
                }}
              />
            ) : (
              <img
                src={up}
                alt="seta para cima"
                onClick={() => {
                  deletePostVote(p.id);
                }}
              />
            )}
            <p>{p.voteSum}</p>
            {voted ? (
              <img src={down} alt="seta para baixo"
                onClick={() => {
                  changePostVote(p.id);
                }}
              />
               
            ) : (
              <img src={down} alt="seta para baixo"
                onClick={() => {
                  deletePostVote(p.id);
                }}
              />
            )}
            {p.commentCount ? <p>{p.commentCount} </p> : <p> 0 </p>}
          </ContainerButtons>
        </BoxPost>
      );
    });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Header />
      <CardPost />
      <LineDivision />
      {renderFeed}
    </div>
  );
};
