import {StyledTitleSmall} from "../../../../../styles/typograph";
import {StyledButton} from "../../../../../styles/buttons";
import {StyledAddSection} from "./style";
import { techContext } from "../../../../../providers/techContext";
import { useContext } from "react";

export const TechnologiesAdd = () => {
  const {openModal} = useContext(techContext);

  return (
    <StyledAddSection >
      <StyledTitleSmall fontweight="high" >Tecnologias</StyledTitleSmall>
      <StyledButton onClick={openModal} buttonstyle="header" buttonsize="add">+</StyledButton>
    </StyledAddSection>
  )
}