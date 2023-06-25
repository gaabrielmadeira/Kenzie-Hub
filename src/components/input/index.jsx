import { forwardRef } from "react";
import { StyledInput } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typograph";
import { FaEye } from "react-icons/fa";
import { StyledInputContainer} from "./style";
import {StyledParagraph} from "../../styles/typograph";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <div>
        <StyledLabel fontcolor="grey-0" >{label}</StyledLabel>
        <StyledInput ref={ref} {...rest} />
      </div>
      {error ? <StyledParagraph fontSize="normal" fontcolor="error" className="errortext">{error.message}</StyledParagraph> : null}
    </>
  )
});

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <>
      <StyledInputContainer>
        <StyledLabel fontcolor="grey-0" >{label}</StyledLabel>
        <StyledInput ref={ref} {...rest} />
        <div className="icon">
          <FaEye />
        </div>
      </StyledInputContainer>
      {error ? <StyledParagraph fontSize="normal" fontcolor="error" className="errortext">{error.message}</StyledParagraph> : null}
    </>
  )
});
