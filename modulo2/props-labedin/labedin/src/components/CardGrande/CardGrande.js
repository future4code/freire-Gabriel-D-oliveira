import React from 'react';
import styled from 'styled-components';

const ContainerBigCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagensBigCard = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TituloBigCard = styled.h4 `
    margin-bottom: 15px;
`
const TextoBigCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardGrande(props) {
    return (
        <ContainerBigCard>
            <ImagensBigCard src={ props.imagem } />
            <TextoBigCard>
                <TituloBigCard>{ props.nome }</TituloBigCard>
                <p>{ props.descricao }</p>
            </TextoBigCard>
        </ContainerBigCard>
    )
}

export default CardGrande;