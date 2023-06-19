import { RegisterForm } from "./registerForm";
import {StyledFormSection } from "../../../../styles/form";
import {StyledTitleBig} from "../../../../styles/typograph";
import {StyledParagraph} from "../../../../styles/typograph";
import {StyledDivTitle} from "./style";

export const RegisterSection= ({loading, setLoading}) => {

  return (
    <StyledFormSection >
      <StyledDivTitle>
        <StyledTitleBig fontSize="big" lineheight="big">Crie a sua conta</StyledTitleBig>
        <StyledParagraph>Rápido e grátis, vamos nessa</StyledParagraph>
      </StyledDivTitle>
      <RegisterForm loading={loading} setLoading={setLoading}/>
    </StyledFormSection>
  )
}