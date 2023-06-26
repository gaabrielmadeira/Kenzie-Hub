import {StyledTtitleNormal} from "../../../../../styles/typograph";
import {StyledButtonClose } from "../../../../../styles/buttons";
import { useContext } from "react";
import { techContext } from "../../../../../providers/techContext";
import {StyledHeaderModal} from "../../../../../styles/modal";

export const EditModalHeader = () =>{
  const {closeEdit} = useContext(techContext);
  
    return(
      <StyledHeaderModal>
        <StyledTtitleNormal fontSize="small">Tecnologia detalhes</StyledTtitleNormal>
        <StyledButtonClose onClick={closeEdit}>X</StyledButtonClose>
      </StyledHeaderModal>
    )
}