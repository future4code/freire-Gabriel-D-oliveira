import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { urlBase } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";
import { goToApplicationPage } from "../../Routes/Coordinator";

export const ListTripsPage = () => {
  const [list, getList] = useRequestData(`${urlBase}/trips`, []);
  const navigate = useNavigate()

  console.log(list);

  const trips = list.map((t) => {
    return (
      <div key={t.id} value={t.id}>
        <p>{t.name}</p>
        <p>{t.description}</p>
        <p>{t.date}</p>
        <p>{t.planet}</p>
        <p>{t.durationInDays}</p>
      </div>
    );
  });

  return (
    <div>
      <button onClick={() => goToApplicationPage(navigate)}>
        Candidatar-se para a viagens
      </button>
      <hr />
      {trips}
    </div>
  );
};
