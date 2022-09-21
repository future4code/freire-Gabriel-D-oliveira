import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const ContainerFormLogin = styled.form`
  margin-top: 12vh;
`;

export const LogoContainer = styled.img`
    margin-top: 10vh;
    margin-left: 30vw;
    width: 35vw;
    height:fit-content;
`

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

export const ButtonRegister = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px;
  margin-top: 4px;
  width: 75vw;
  height: 6.5vh;
  color: #fe7e02;
  background: #ffffff;
  border-radius: 27px;
`;

export const LineGradient = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  width: 75vw;
  transform: rotate(0.32deg);
  height: 1px;
  border: none;
`;
