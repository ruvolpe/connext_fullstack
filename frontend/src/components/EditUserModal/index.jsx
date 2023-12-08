import { useContext, useEffect } from "react";
import {
  StyledForm,
  StyledButton,
  StyledModal,
  StyledModalOverlay,
  StyledCloseButton,
} from "./styles";
import { FormInput } from "../../fragments/FormInput";
import { formValidation } from "../FormValidation/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";

const EditUserModal = ({ isOpen, onClose, user, children }) => {
  const { userUpdate } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formValidation),
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  const submit = (formData) => {
    userUpdate(formData, user.id);
    onClose();
  };

  return (
    isOpen && (
      <StyledModalOverlay>
        <StyledModal>
          <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
          <p>edite o seu usuário</p>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <FormInput
              type="text"
              id="editedName"
              placeholder="digite aqui seu nome"
              label="nome"
              register={register("name")}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
            <FormInput
              type="email"
              id="editedEmail"
              placeholder="digite aqui seu email"
              label="email"
              register={register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}
            <FormInput
              type="text"
              id="editedPhone"
              placeholder="número de telefone"
              label="telefone"
              register={register("phone")}
            />
            {errors.phone ? <p>{errors.phone.message}</p> : null}
            <FormInput
              type="password"
              id="editedPassword"
              placeholder="digite aqui sua senha"
              label="senha"
              register={register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <StyledButton type="submit">cadastrar</StyledButton>
          </StyledForm>
        </StyledModal>
      </StyledModalOverlay>
    )
  );
};

export default EditUserModal;
