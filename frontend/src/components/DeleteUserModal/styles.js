import styled from "styled-components";

export const StyledDiv = styled.div`
  font-size: 0.75rem;
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

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background: #808080;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledCloseButton = styled.button`
  align-self: flex-end;
  padding: 5px;
  margin: 0px;
`;
