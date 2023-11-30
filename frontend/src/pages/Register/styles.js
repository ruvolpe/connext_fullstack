import styled from "styled-components";

export const StyledDivCircle = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    top: -100px;
    left: -100px;
    margin: 0px 10px 75px 5px;
    border-radius: 50%;
    box-shadow: 0 0 10px 1px rgba(152, 255, 152, 0.8);
    background-color: #55925550;
    animation-name: breath-animation-big;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    filter: blur(15px);
  }
`;

export const StyledDivCircle2 = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    bottom: -125px;
    right: -125px;
    margin: 0px 10px 75px 5px;
    border-radius: 50%;
    box-shadow: 0 0 10px 1px rgba(152, 255, 152, 0.8);
    background-color: #55925550;
    animation-name: breath-animation-big;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    filter: blur(15px);
  }
`;

export const StyledH1 = styled.h1`
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  font-family: "Playfair Display";
  font-size: 2rem;
  letter-spacing: 8px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const StyledDiv = styled.div`
  font-size: 0.75rem;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
`;
