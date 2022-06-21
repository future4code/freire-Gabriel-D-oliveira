import React from "react";
import styled from "styled-components";

const ContainerPages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
  flex-direction: column;
  align-items: center;

  }

  input {
    width: 85%;
  }
`;

export default class EscolaridadeComplementar extends React.Component {
  render() {
    return (
      <ContainerPages>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <div>
          <p>5. Porque você não terminou o curso de graduação?</p>
          <label for="desistencia" />
          <input name="desistencia" id="desistencia" />
        </div>
        <div>
          <p>6. Você fez algum curso complementar?</p>
          <label for="curso tecnico" />
          <select name="curso tecnico" id="curso tecnico">
            <option value="Curso técnico">Curso técnico</option>
            <option value="Curso inglês"> Curso inglês</option>
            <option value="Nenhum"> Nenhum </option>
          </select>
        </div>
      </ContainerPages>
    );
  }
}
