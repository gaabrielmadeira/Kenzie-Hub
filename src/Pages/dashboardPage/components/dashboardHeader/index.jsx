import { Link } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { StyledHeader } from "../../../../styles/globalStyles";
import { StyledButton } from "../../../../styles/buttons";
import {StyledContainer} from "../../../../styles/container";
import { useContext } from "react";
import { userContext } from "../../../../providers/userContext";

export const DashboardHeader = () => {

  const {Logout} = useContext(userContext);

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