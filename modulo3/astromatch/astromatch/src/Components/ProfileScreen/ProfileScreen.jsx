import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Header } from "../Header/Header";

const ContainerImage = styled.img`
  width: 160px;
  height: 200px;
`;
const ContainerProfile = styled.div`
  position: absolute;
  left: 25%;
  top: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 2px solid black;
  width: 35%;
`;

export const ProfileScreen = (props) => {
  const [profile, setProfile] = useState({});
  // const [chosenProfile, setChosenProfile] = useState({});
  

  const urlGetProfile =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/person";
  const urlChooseProfile =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/choose-person";

  const getProfile = () => {
    axios
      .get(urlGetProfile)
      .then((resposta) => {
        setProfile(resposta.data.profile);
        console.log(resposta.data.profile);
      })
      .catch((err) => {
        alert(`Erro ao carregar o perfil`);
      });
  };

  const choosePerson = () => {
    const body = {
      id: profile.id,
      choice: true,
    };

    axios
      .post(urlChooseProfile, body)

      .then((resposta) => {
        // setChosenProfile(resposta.data.profile);
        console.log(profile);
        console.log(body);
        getProfile();
      })
      .catch((err) => {
        alert(`Erro ao dar Match`);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  
  return (
    <ContainerProfile>
      <Header
        changePageToProfile={props.changePageToProfile}
        changePageToMatches={props.changePageToMatches}
      />
      <ContainerImage src={profile.photo} alt="foto do perfil dos usuarios" />
      <p>
        {profile.name}, {profile.age} <br /> {profile.bio}
      </p>
      <div>
        <button onClick={() => getProfile()}>Reject</button>
        <button onClick={() => choosePerson()}>Aprove</button>
      </div>
    </ContainerProfile>
  );
};
