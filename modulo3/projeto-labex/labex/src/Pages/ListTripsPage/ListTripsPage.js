import axios from "axios";
import React, { useEffect, useState } from "react";

export const ListTripsPage = () => {
  const [list, setList] = useState([]);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira/trips"
      )
      .then((response) => {
        console.log(response.data);
        setList(response.data.trips);
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  console.log(list);

  const trips = list.map((trips) => {
    return (
      <div key={trips.id} value>
        <p>{trips.name}</p>
        <p>{trips.description}</p>
        <p>{trips.date}</p>
        <p>{trips.planet}</p>
        <p>{trips.durationInDays}</p>
      </div>
    );
  });

  return <div>{trips}</div>;
};
