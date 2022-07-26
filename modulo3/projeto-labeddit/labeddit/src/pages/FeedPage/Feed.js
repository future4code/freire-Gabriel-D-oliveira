import React, { useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { getPosts } from "../../services/posts";

export const Feed = () => {
  useProtectedPage();

  

  useEffect(()=>{
    getPosts()
  },[])

  return (
  <div>
    Feed</div>)
};
