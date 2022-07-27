import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import { auth } from "../constants/requestConstants";

export const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, { headers: auth })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };


 const getPostsComments = (id) => {
    axios
      .get(`${BASE_URL}/posts/${id}/comments`, { headers: auth })
      .then((res) => {
        console.log(res.data);
        setComments(res.data)
      })
      .catch((err)=> {
        console.log(err)
      });
  };

  const postId = posts && posts.map((p)=>{
    return p.id
  })

  const data = {
    posts,
    setPosts,
    getPosts,
    comments,
    setComments,
    getPostsComments,
    postId,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
