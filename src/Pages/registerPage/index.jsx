import { RegisterHeader } from "./components/registerHeader";
import { RegisterSection } from "./components/registerSection";
import {StyledContainer} from "../../styles/container";

export const RegisterPage = ({loading, setLoading}) => {

  return (
    <StyledContainer>
      <RegisterHeader />
      <main>
        <RegisterSection loading={loading} setLoading={setLoading}/>
      </main>
    </StyledContainer>
  )
}