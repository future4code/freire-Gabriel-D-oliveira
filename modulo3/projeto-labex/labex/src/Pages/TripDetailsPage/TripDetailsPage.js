import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPages } from "../../Hooks/customHooks";


export const TripDetailsPage = () => {
 
useProtectedPages()

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira/trip/:id",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  return (
    <div>
      <ul>
        <li>Details of Trip 1</li>
        <li>Details of Trip 2</li>
        <li>Details of Trip 3</li>
        <li>Details of Trip 4</li>
      </ul>
    </div>
  );
};
