import { IButtonProps } from "./types";
import { ButtonContainer } from "./styles";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;