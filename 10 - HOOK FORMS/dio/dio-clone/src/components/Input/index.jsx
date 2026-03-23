import { Controller } from "react-hook-form";
import { InputContainer, InputText, ErrorText } from "./styles";

const Input = ({ name, control, errorMessages, ...rest }) => {
  return (
    <>
      <InputContainer>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText {...field} {...rest} />
          )}
        />
      </InputContainer>

      {errorMessages && <ErrorText>{errorMessages}</ErrorText>}
    </>
  );
};

export default Input;