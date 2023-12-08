import styled from "styled-components";

export const StyledMain = styled.main`
  flex: 1;
  overflow-y: scroll !important;
  padding: 20px;
`;

export const StyledDiv = styled.div`
  font-size: 0.75rem;
`;

export const StyledDivCircle = styled.div`
  @media (min-width: 900px) {
    position: absolute;
    top: -100px;
    left: -100px;
    margin: 0px 10px 75px 5px;
    box-shadow: 0 0 10px 1px rgba(152, 255, 152, 0.8);
    background-color: #55925550;
    animation-name: breath-animation-big;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    filter: blur(15px);
    border-radius: 50%;
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
  font-family: "Playfair Display";
  font-size: 5rem;
  letter-spacing: 8px;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0px;
  margin: 0px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  @media (min-width: 900px) {
    margin: auto;
    min-width: 18.75rem;
  }
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid #808080;
`;

export const StyledButton = styled.button`
  padding: 0.625rem;
  border: none;
  border-radius: 1.25rem;
  margin: 1.25rem 0rem;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  font-weight: bold;
`;
