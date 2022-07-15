import styled from 'styled-components';


export const ContainerImage = styled.img`
padding-top: 12px;
width: 240px;
height: 240px;
`;

export const ContainerProfile = styled.div`

display: flex;
flex-direction: column;
text-align: center;
align-items: center;
border: 2px solid black;
width: 25%;
height: 70vh;

    p {
        width: fit-content;
        padding: 0 2px;
    }

    button {
        margin: 4px;
    }

`;