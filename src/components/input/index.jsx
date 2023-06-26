import { forwardRef, useContext} from "react";
import { StyledInput } from "../../styles/inputs";
import { StyledLabel } from "../../styles/typograph";
import { FaEye } from "react-icons/fa";
import {AiFillEyeInvisible} from "react-icons/ai";
import { StyledInputContainer} from "./style";
import {StyledParagraph} from "../../styles/typograph";
import { userContext } from "../../providers/userContext";


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
  const {showPassword, setShowPassword} = useContext(userContext);

  return (
    <>
      <StyledInputContainer>
        <StyledLabel fontcolor="grey-0" >{label}</StyledLabel>
        <StyledInput ref={ref} {...rest} />
        <div className="icon" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaEye /> : <AiFillEyeInvisible />}
        </div>
      </StyledInputContainer>
      {error ? <StyledParagraph fontSize="normal" fontcolor="error" className="errortext">{error.message}</StyledParagraph> : null}
    </>
  )
});
