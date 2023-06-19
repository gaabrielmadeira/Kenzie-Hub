import { LoginHeader } from "./components/loginHeader";
import { LoginSection } from "./components/loginSection";
import { StyledContainer } from "../../styles/container";

export const LoginPage = ({loading, setLoading, setUser}) => {
  return (
    <StyledContainer height="body">
      <LoginHeader />
      <main>
        <LoginSection loading={loading} setLoading={setLoading} setUser={setUser}/>
      </main>
    </StyledContainer>
  )
}