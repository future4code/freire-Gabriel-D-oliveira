import styled from "styled-components";

export const BoxPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 20px;
  margin-top: 8px;
  padding: 8px;

  width: 85vw;
  height: fit-content;

  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const PrimaryTextContent = styled.div`
    width: 85vw;
  height: fit-content;
`

export const ContainerButtons = styled.div`
display: flex;
gap: 16px;
`
;

export const LineDivision = styled.hr`
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  width: 85vw;
  transform: rotate(0.32deg);
  height: 1px;
  border: none;
  margin: 8px 0px 8px 26px;
`;

export const ArrowStyle = styled.img`
    
`;
