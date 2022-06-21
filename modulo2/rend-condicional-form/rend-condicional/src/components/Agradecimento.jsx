import React from "react";
import styled from 'styled-components'

const ContainerPages  = styled.section `
display: flex;
flex-direction: column;
align-items: center;
`

export default class Agradecimento extends React.Component {

    render (){

        return (
            <ContainerPages>
            <h3>O FORMULÁRIO ACABOU!</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>              
          </ContainerPages>

        );
    }


}