import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../Constants/Constants";
import { useProtectedPages } from "../../Hooks/useProtectedPages";
import { useRequestData } from "../../Hooks/useRequestData";
import { urlBase, headersAxios } from "../../Constants/Constants";

export const TripDetailsPage = () => {
  useProtectedPages();
  const {id} = useParams();
  console.log(id);

  const [allTrips, getAllTrips] = useRequestData(`${urlBase}/trips`, []);

  console.log(allTrips);

    useEffect(() => {
    axios
      .get(`${urlBase}/trip/${id}`, headersAxios)
      .then((response) => {

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  },[])

  const tripsDetails = allTrips.map((t) => {
    return (
      <div key={t.id} value={t.id}>
        <p>{t.name}</p>
        <p>{t.description}</p>
        <p>{t.date}</p>
        <p>{t.planet}</p>
        <p>{t.durationInDays}</p>
        <hr/>

      </div>
    );
  });

  return (
    <div>
      {tripsDetails}
      
    </div>
  );
};
