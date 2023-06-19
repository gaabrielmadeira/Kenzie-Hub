import { LoginForm } from "./loginForm";
import { RegisterButton } from "./registerButton";
import {StyledFormSection} from "../../../../styles/form";
import {StyledTitleBig} from "../../../../styles/typograph";

export const LoginSection = ({ loading, setLoading, setUser }) => {
  return (
    <StyledFormSection>
      <div>
        <StyledTitleBig fontSize="big" lineheight="big">Login</StyledTitleBig>
      </div>
      <LoginForm loading={loading} setLoading={setLoading} setUser={setUser}>
          <RegisterButton />
      </LoginForm>
    </StyledFormSection>
  )
}