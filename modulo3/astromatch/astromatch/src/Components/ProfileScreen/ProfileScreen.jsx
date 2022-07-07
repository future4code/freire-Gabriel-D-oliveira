import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerImage = styled.img`
  width: 160px;
  height: 200px;
`;
const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 2px solid black;
  width: 80%;
`;

export const ProfileScreen = () => {
  const [profile, setProfile] = useState({});
  const [chosenProfile, setChosenProfile] = useState({});
  const [click, setClick] = useState();

  const urlGetProfile =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel-D-oliveira/person";
  const urlChooseProfile =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Gabriel-D-oliveira/choose-person";

  const getProfile = () => {
    axios
      .get(urlGetProfile)
      .then((resposta) => {
        setProfile(resposta.data.profile);
      })
      .catch((err) => {
        alert(`Erro ao carregar o perfil`);
      });
  };

  const choosePerson = (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    };

    axios
      .post(urlChooseProfile, body)

      .then((resposta) => {
        setChosenProfile(resposta.data.profile);
        getProfile();
      })
      .catch((err) => {
        alert(`Erro ao dar Match`);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(profile);
  return (
    <ContainerProfile>
      <button>Matches</button>
      <p>{profile.age}</p>
      <p>{profile.name}</p>
      <ContainerImage src={profile.photo} alt="foto do perfil dos usuarios" />
      <p>{profile.bio}</p>
      <div>
        <button onClick={() => choosePerson(false)}>Reject</button>
        <button onClick={() => choosePerson(true)}>Aprove</button>
      </div>
    </ContainerProfile>
  );
};
