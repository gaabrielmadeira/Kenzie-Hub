import { useContext } from "react";
import { techContext } from "../../../../../providers/techContext";
import {StyledTtitleNormal} from "../../../../../styles/typograph";
import {StyledButtonClose} from "../../../../../styles/buttons";
import {StyledHeaderModal } from "../../../../../styles/modal";

export const HeaderModal = () =>{
  const {closeModal} = useContext(techContext);

  return(
    <StyledHeaderModal >
      <StyledTtitleNormal fontSize="small">Cadastrar tecnologia</StyledTtitleNormal>
      <StyledButtonClose onClick={closeModal}>X</StyledButtonClose>
    </StyledHeaderModal>
  )
}