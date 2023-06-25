import { Link } from "react-router-dom";
import {StyledButton } from "../../../../../styles/buttons";
import {StyledRegister } from "./style";
import {StyledParagraph} from "../../../../../styles/typograph";

export const RegisterButton = () => {
  return (
    <StyledRegister >
      <StyledParagraph className="question" fontSize="small" >Ainda não possui uma conta?</StyledParagraph>
      <Link to="/register">
        <StyledButton buttonstyle="disable" >Cadastre-se</StyledButton>
      </Link>
    </StyledRegister>
  )
}