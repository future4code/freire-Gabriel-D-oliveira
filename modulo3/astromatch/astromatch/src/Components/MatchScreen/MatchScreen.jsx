import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Header } from "../Header/Header";

const ContainerImage = styled.img`
  width: 36px;
  height: 90%;
  /* border-radius: 16px; */
  padding-top: 6px;
`;
const ContainerMatches = styled.div`
  position: absolute;
  left: 25%;
  top: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid red;
  width: 35%;
`;

const ContainerProfileMatch = styled.div `
  border: 1px solid green;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;

  p{
    width: fit-content;
  }

`

export const MatchScreen = (props) => {

  const [matchesList, setMatchesList] = useState([])

  const getMatches = ()=> {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/matches`)
    .then (response => {
      setMatchesList(response.data.matches)
      console.log(response.data.matches)
    })
    .catch(err =>
      alert("Erro na lista de matches"))
  }

  useEffect(() => {
    getMatches()
  }, [])

  console.log(matchesList)
    
  return (
    <ContainerMatches>
      <Header
        changePageToProfile={props.changePageToProfile}
        changePageToMatches={props.changePageToMatches}
      />
      {matchesList.map(person =>{
      return (
      <ContainerProfileMatch key={person.id}>
        <ContainerImage src={person.photo} alt="foto de perfil do usuario"/>
        <p>{person.name}</p>
      </ContainerProfileMatch>)})
      }
    </ContainerMatches>
  );
};
