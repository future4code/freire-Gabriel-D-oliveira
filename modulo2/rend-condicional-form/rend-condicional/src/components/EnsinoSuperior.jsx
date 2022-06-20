import React from "react";
import styled from 'styled-components';

const ContainerPages  = styled.section `
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`


export default class EnsinoSuperior extends React.Component {
  render() {
    return (
      <ContainerPages>
        <h3>ETAPA 2 - INFORMAÇÕES ENSINO SUPERIOR </h3>
        <div>
          <p>5. Qual o curso?</p>
          <label for="curso" />
          <input name="curso" id="curso" />
        </div>
        <div>
          <p>6. Unidade de ensino?</p>
          <label for="localizacao" />
          <input name="localizacao" id="localizacao" />
        </div>
      </ContainerPages>
    );
  }
}
