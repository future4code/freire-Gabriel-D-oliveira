import React, { useContext, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getPosts } from "../../context/GlobalState";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { CardPost } from "../../components/cardPost/CardPost";
import { useParams, useNavigate } from "react-router-dom";
import { goToPostPage } from "../../routes/Coordinator";

export const Feed = () => {
  useProtectedPage();
  const { posts, setPosts, getPosts, createPostVote, changePostVote } =
    useContext(GlobalStateContext);
  const navigate = useNavigate();
  
  const renderFeed =
    posts &&
    posts.map((p) => {
      return (
        <>
          <div onClick={() => goToPostPage(navigate, p.id)} key={p.id}>
            <p>
              <b>Enviado por: {p.username}</b>
            </p>
            <p>{p.body}</p>
          </div>
          <button
            onClick={() => {
              createPostVote(p.id);
            }}
          >
            Up
          </button>
          <p>{p.voteSum}</p>
          <button
            onClick={() => {
              changePostVote(p.id);
            }}
          >
            Down
          </button>
        </>
      );
    });

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <CardPost />
      {renderFeed}
    </div>
  );
};
