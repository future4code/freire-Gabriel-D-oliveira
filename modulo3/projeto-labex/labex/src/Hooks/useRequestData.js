import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
    .get(url)
    .then((response) => {
      setData(response.data.trips);
      
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
   getData();
  }, [url]);

  return [data, getData];
};
