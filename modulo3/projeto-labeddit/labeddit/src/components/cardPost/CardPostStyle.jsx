import styled from "styled-components";

export const InputPost = styled.input`
background: #EDEDED;
border-radius: 12px;    
width: 85vw;
height: 12vh;
padding-left: 4px;
border: none;
`

export const InputTitlePost = styled.input`
background: #EDEDED;
border-radius: 6px;    
width: 85vw;
height: 4vh;
padding-left: 4px;
margin-top: 8px;
border: none;
`

export const ContainerFormPost = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
`;

export const ButtonGradient = styled.button`
  border: none;
  width: 85vw;
  height: 5vh;
  margin-bottom: 4px;
  color: #ffffff;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.1s;

  :active {
    transform: scale(0.9);
  }
`;

