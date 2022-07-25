import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { ContainerMatches, ContainerProfileMatch, ContainerImage } from "./MatchScreenStyle";


export const MatchScreen = (props) => {

  useEffect(() => {
    props.getMatches();
  }, []);

    
  return (
    <ContainerMatches>
      <Header
        changePageToProfile={props.changePageToProfile}
        changePageToMatches={props.changePageToMatches}
      />
      {props.matchesList.map(person =>{
      return (
      <ContainerProfileMatch key={person.id}>
        <ContainerImage src={person.photo} alt={person.photo_alt}/>
        <p>{person.name}</p>
      </ContainerProfileMatch>)})
      }
    </ContainerMatches>
  );
};
