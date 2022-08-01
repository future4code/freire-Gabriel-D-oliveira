import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/LoginPage/Login";
import { Register } from "../pages/RegisterPage/Register";
import { Feed } from "../pages/FeedPage/Feed";
import { Post } from "../pages/PostPage/Post";
import { Error } from "../pages/ErrorPage/Error";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/feed"} element={<Feed />} />
        <Route path={"/feed/:id"} element={<Post />} />
        <Route path={""} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
