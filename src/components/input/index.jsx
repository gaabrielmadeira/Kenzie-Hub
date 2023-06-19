import { forwardRef } from "react";
import { StyledInput } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typograph";
import { FaEye } from "react-icons/fa";
import { StyledInputContainer, StyledErrorMessage } from "./style";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <div>
        <StyledLabel fontcolor="label" >{label}</StyledLabel>
        <StyledInput ref={ref} {...rest} />
      </div>
      <StyledErrorMessage>
        {error ? <p className="errortext">{error.message}</p> : null}
      </StyledErrorMessage>
    </>
  )
});

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <StyledInputContainer>
        <StyledLabel fontcolor="label" >{label}</StyledLabel>
        <StyledInput ref={ref} {...rest} />
        <div className="icon">
          <FaEye />
        </div>
      </StyledInputContainer>
      <StyledErrorMessage>
        {error ? <p className="errortext">{error.message}</p> : null}
      </StyledErrorMessage>
    </>
  )
});
