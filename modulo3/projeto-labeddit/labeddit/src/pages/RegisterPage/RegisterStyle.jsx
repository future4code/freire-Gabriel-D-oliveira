import styled from "styled-components";

export const InputStyle = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75vw;
  height: 6vh;
  border-radius: 4px;
  border: 1px solid #d5d8de;
  margin-top: 8px;
  padding-left: 4px;
  cursor: pointer;
  transition: all 0.1s;

  :active {
    transform: scale(0.9);
  }
`;

export const ButtonGradient = styled.button`
  border: none;
  width: 75vw;
  height: 6.5vh;
  margin-top: 12vh;
  margin-bottom: 4px;
  color: #ffffff;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  border-radius: 27px;
  cursor: pointer;
  transition: all 0.1s;

  :active {
    transform: scale(0.9);
  }
`;

export const ContainerFormLogin = styled.form`
  margin-top: 14vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ContainerCheckBox = styled.label`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  gap: 8px;
`;
