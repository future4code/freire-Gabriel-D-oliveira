import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { headersAxios, urlBase } from "../../Constants/Constants";
import { useProtectedPages } from "../../Hooks/useProtectedPages";
import { useRequestData } from "../../Hooks/useRequestData";
import {
  goToCreateTripPage,
  goToHomePage,
  goToLoginPage,
  goToTripDetails
} from "../../Routes/Coordinator";

export const AdminHomePage = () => {
  useProtectedPages();
  const navigate = useNavigate();

  const [list, getList] = useRequestData(`${urlBase}/trips`, []);

  const onSubmitLogout = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };

  console.log(list)
  const deleteTrip = (id) => {
    axios
      .delete(`${urlBase}/trips/${id}`, headersAxios)
      .then((res) => {
        window.confirm("Tem certeza que deseja excluir a viagem?");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trips =
    list &&
    list.map((trips) => {
      return (
        <div onClick={() => goToTripDetails(navigate, trips.id)} key={trips.id} value={trips.id}>
          <p>{trips.name}</p>
          <p>{trips.description}</p>
          <p>{trips.planet}</p>
          <button onClick={() => deleteTrip(trips.id)}>X</button>
        </div>
      );
    });

  return (
    <div>
      <button onClick={() => goToHomePage(navigate)}> Voltar</button>
      <button onClick={() => goToCreateTripPage(navigate)}>Criar viagem</button>
      <button onClick={() => onSubmitLogout()}> Deslogar</button>
      <hr />
      {trips}
    </div>
  );
};
