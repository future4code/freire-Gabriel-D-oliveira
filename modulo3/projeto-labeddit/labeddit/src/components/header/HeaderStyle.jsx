import styled from "styled-components";

export const LogoContainer = styled.img`
  width: fit-content;
  position: relative;
  left: 8vw;
`;

export const ButtonReturn = styled.img`
  position: relative;
  left: -14vw;

`

export const ContainerHeader = styled.div`
  display: flex;
  margin-top: 4vh;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 56px;
  background-color: #ededed;
`;

export const TextClicker = styled.p`
  position: relative;
  left: 20vw;
  color: #4088cb;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
