import styled from 'styled-components';


export const ContainerImage = styled.img`
  width: 36px;
  height: 90%;
  border-radius: 30%;
  padding-top: 2px;
  padding-left: 4px;
`;

export const ContainerMatches = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 25%;
  min-height: 70vh;
  max-height: fit-content;
  border: solid 1px;
`;

export const ContainerProfileMatch = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p{
    width: fit-content;
    padding-left: 8px;
  }

`