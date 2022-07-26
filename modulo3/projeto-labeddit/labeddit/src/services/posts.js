import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { auth } from "../constants/requestConstants";


export const getPosts = () => {
    axios.get(`${BASE_URL}/posts`, {headers:auth})
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=> {
        console.log(err.message)
    });
  };