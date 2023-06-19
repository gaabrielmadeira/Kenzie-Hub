import { Link } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import {StyledHeader} from "../../../../styles/globalStyles";
import {StyledButton} from "../../../../styles/buttons";


export const RegisterHeader = () => {

  return (
    <StyledHeader widht="small">
        <img src={Logo} alt="Logo com o nome Kenzie Hub na cor rosa" />
      <nav>
        <Link to="/"><StyledButton buttonsize="header" buttonstyle="header">Voltar</StyledButton></Link>
      </nav>
    </StyledHeader>
  )
}