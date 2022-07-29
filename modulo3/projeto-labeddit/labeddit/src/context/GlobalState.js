import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";


export const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const auth = {
    Authorization: localStorage.getItem('token'),
}
  const body = {direction: 1}

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts?size=20`, { headers: auth })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };


 const getPostsComments = (id) => {
    axios
      .get(`${BASE_URL}/posts/${id}/comments`, { headers: auth })
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
        getPosts();
      })
      .catch((err)=> {
        console.log(err)
      });
  };

  const createPostVote = (id) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {headers:auth},
    )
    .then((res)=>{
      console.log(res);
      getPosts();
    })
    .catch((err) => {
      console.log(err)
    })
    
  }

  const changePostVote = (id) => {
    axios.put(`${BASE_URL}/posts/${id}/votes`, {direction: -1}, {headers:auth},
    )
    .then((res)=>{
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    getPosts()
  }  



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
    createPostVote,
    changePostVote
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
