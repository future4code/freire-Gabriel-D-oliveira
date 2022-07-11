import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { ProfileScreen } from './Components/ProfileScreen/ProfileScreen';
import styled, { createGlobalStyle } from 'styled-components';
import { MatchScreen } from './Components/MatchScreen/MatchScreen';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    p {
      font-size: 16px;
    }
 `

 const Centraliza = styled.div `
 display: flex;
 flex-direction: column;
 margin-top: 16px;
 gap: 24px;
 align-items: center;

 `

function App() {
  const [page, setPage] = useState("profile")
  const [matchesList, setMatchesList] = useState([])

  const urlGetMatches = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/matches`

  const getMatches = () => {

    axios.get(urlGetMatches)
      .then(response => {
        setMatchesList(response.data.matches)
        console.log(response.data.matches)
      })
      .catch(err =>
        alert("Erro na lista de matches"))
  }

  const urlClearMatches =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/clear";

  const clearMatches = () => {
    axios
      .put(urlClearMatches)
      .then( response => {
        alert('Matches apagados com sucesso!');
        getMatches()
     })
    .catch ( err => {
      alert(`Erro ${err.message} apagar os matches`)});
};

const changePageToProfile = () => {
  setPage("profile")
}
const changePageToMatches = () => {
  setPage("matches")
}

const renderPage = () => {
  if (page === "matches") {
    return <MatchScreen
      changePageToProfile={changePageToProfile}
      changePageToMatches={changePageToMatches}
      matchesList={matchesList}
      getMatches={getMatches}
      clearMatches={clearMatches} />
  } else {
    return <ProfileScreen
      changePageToProfile={changePageToProfile}
      changePageToMatches={changePageToMatches} />
  }
}


useEffect(() => {
  getMatches()
}, [])


return (
  <Centraliza>
    <GlobalStyle />
    <button onClick={clearMatches}>Clear Matches</button>
    {renderPage()}
  </Centraliza>
);
}

export default App;
