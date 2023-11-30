import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  padding: 8px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #808080;

  &::placeholder {
    color: #f0f0f0;
  }
`;

export const StyledLabel = styled.label`
  margin: 5px 0px;
  font-weight: bold;
`;
