import React, { useContext, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getPosts } from "../../context/GlobalState";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { CardPost } from "../../components/cardPost/CardPost";
import { useParams, useNavigate } from "react-router-dom";
import { goToPostPage } from "../../routes/Coordinator";


export const Feed = () => {
  useProtectedPage();
  const { posts, setPosts, getPosts } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const {post} = useParams();


  const renderFeed =
    posts &&
    posts.map((p) => {
      return (
        <div onClick={()=> goToPostPage(navigate, post)} key={p.id}>
          <p>
            <b>Enviado por:{p.username}</b>
          </p>
          <p>{p.body}</p>
        </div>
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
