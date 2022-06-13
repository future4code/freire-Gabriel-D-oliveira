import React from "react";
import styled from 'styled-components';

const ContainerPages  = styled.section `
display: flex;
flex-direction: column;
align-items: center;
`

class DadosGerais extends React.Component {
  render() {
    return (
      <ContainerPages>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
          <p>1. Qual é seu nome?</p>
          <label for="nome" />
          <input name="nome" id="nome" />
        </div>

        <div>
          <p>2. Qual é a sua idade?</p>
          <label for="idade" />
          <input name="idade" id="idade" />
        </div>

        <div>
          <p>3. Qual é o seu e-mail?</p>
          <label for="email" />
          <input name="email" id="email" />
        </div>

        <div>
          <p>4. Qual a sua escolaridade?</p>
          <label for="escolaridade" />
          <select name="escolaridade" id="escolaridade">
            <option value="Ensino médio incompleto">
              Ensino médio incompleto
            </option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">
              Ensino superior incompleto
            </option>
            <option value="Ensino superior completo">
              Ensino superior completo
            </option>
          </select>
        </div>
      </ContainerPages>
    );
  }
}

export default DadosGerais;
