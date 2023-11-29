import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  max-width: 18.75rem;
  margin: auto;
  min-width: 18.75rem;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 1.25rem;
`;

export const StyledButton = styled.button`
  padding: 0.625rem;
  border: none;
  border-radius: 1.25rem;
  margin: 1.25rem 0rem;
  cursor: pointer;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.3125rem;
  font-weight: bold;
`;
