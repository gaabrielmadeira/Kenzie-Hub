import { Link } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { StyledHeader } from "../../../../styles/globalStyles";
import { StyledButton } from "../../../../styles/buttons";
import {StyledContainer} from "../../../../styles/container";

export const DashboardHeader = ({ setUser }) => {

  const Logout = () => {
    setUser("");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  }

  return (
    <StyledContainer heigth="header">
      <StyledHeader>
        <img src={Logo} alt="Imagem com as palavras Kenzie Hub escritas na cor rosa" />
        <nav>
          <Link to="/">
            <StyledButton buttonstyle="header" buttonsize="header" onClick={Logout}>Sair</StyledButton>
          </Link>
        </nav>
      </StyledHeader>
    </StyledContainer>
  )
}