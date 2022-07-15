import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToListTrips,
  goToAdminPage,
  goToLoginPage,
} from "../../Routes/Coordinator";

export const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logIn = () => {
    if (token !== null) {
      return goToAdminPage(navigate);
    } else {
      return goToLoginPage(navigate);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => goToListTrips(navigate)}>
        Ver lista de viagens
      </button>
       <button onClick={() => logIn()}>Login</button>
    </div>
  );
};
