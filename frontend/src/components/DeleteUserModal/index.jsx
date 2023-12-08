import { useContext } from "react";
import {
  StyledButton,
  StyledModal,
  StyledModalOverlay,
  StyledCloseButton,
} from "./styles";
import { UserContext } from "../../contexts/UserContext";

const EditUserModal = ({ isOpen, onClose, user, children }) => {
  const { userDelete } = useContext(UserContext);

  return (
    isOpen && (
      <StyledModalOverlay>
        <StyledModal>
          <StyledCloseButton onClick={onClose}>x</StyledCloseButton>
          <p>tem certeza que deseja deletar seu usuário?</p>
          <StyledButton onClick={onClose}>Não</StyledButton>
          <StyledButton onClick={() => userDelete(user.id)}>Sim</StyledButton>
        </StyledModal>
      </StyledModalOverlay>
    )
  );
};

export default EditUserModal;
