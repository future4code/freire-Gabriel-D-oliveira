import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { ProfileScreen } from './Components/ProfileScreen/ProfileScreen';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './Components/Header/Header';
import { MatchScreen } from './Components/MatchScreen/MatchScreen';
import { render } from '@testing-library/react';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    p {
      font-size: 16px;
    }
 `

function App() {
  const [page, setPage] = useState("profile")

  const changePageToProfile = () => {  
      setPage("profile")
    }
  const changePageToMatches = () => {  
      setPage("matches")
    }

  const renderPage = () => {
    if (page === "matches") {
      return <MatchScreen 
      changePageToProfile ={changePageToProfile}
      changePageToMatches ={changePageToMatches}/>
    } else {
      return <ProfileScreen 
      changePageToProfile ={changePageToProfile}
      changePageToMatches ={changePageToMatches} />
    }
  }

  

  return (
    <div>
      <GlobalStyle />
      {renderPage()}
    </div>
  );
}

export default App;
