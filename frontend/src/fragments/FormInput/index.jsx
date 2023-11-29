import { StyledDiv, StyledInput, StyledLabel } from "./styles";

export const FormInput = ({ label, id, placeholder, type, register }) => {
  return (
    <StyledDiv>
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}⁠{" "}
      <StyledInput
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        {...register}
      />
    </StyledDiv>
  );
};
