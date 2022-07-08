import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    border: 1px solid;
    width: 100%;
    height: 20%;

    button {
        padding-left: 6px;
        padding-right: 6px;
    }
    

`


export const Header = (props) =>{

    return (
        <HeaderContainer>
            <button onClick={()=> props.changePageToProfile()}>Return</button>
            <h1>AstroMatch</h1>
            <button onClick={() => props.changePageToMatches()}>Matches</button>            
        </HeaderContainer>
    )
}
