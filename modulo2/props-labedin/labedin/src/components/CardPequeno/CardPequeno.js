import React from "react";
// import "./CardPequeno.css";
import styled from "styled-components";

const ContainerPequeno = styled.section`
  display: flex;
  flex-direction: column;
`;

const ContainerCardsPequenos = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  margin: 2%;
  padding-left: 2%;
  height: 10vh;
`;

const ImagensCardPequeno = styled.img`
  width: 40px;
  height: 5vh;
  margin-right: 8px;
`;

function CardPequeno(props) {
  return (
    <ContainerPequeno>
      <ContainerCardsPequenos>
        <ImagensCardPequeno src={props.imagemEmail} />
        <p>
          <b>Email: </b>
          {props.email}
        </p>
      </ContainerCardsPequenos>
      <ContainerCardsPequenos>
        <ImagensCardPequeno src={props.imagemEndereco} />
        <p>
          <b>Endereço: </b>
          {props.endereco}
        </p>
      </ContainerCardsPequenos>
    </ContainerPequeno>
  );
}

export default CardPequeno;
