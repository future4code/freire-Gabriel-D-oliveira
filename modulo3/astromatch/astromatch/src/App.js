import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { ProfileScreen } from './Components/ProfileScreen/ProfileScreen';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        padding: 0;
    }

    p {
      font-size: 16px;
    }
 `

function App() {
  const[page, setPage] = useState("profile")




  return (
    <div>
      <GlobalStyle/>
      <ProfileScreen />
    </div>
  );
}

export default App;
