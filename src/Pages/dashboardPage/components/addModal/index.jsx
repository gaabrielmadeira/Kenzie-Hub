import { HeaderModal } from "./headerModal";
import { ModalForm } from "./modalForm";
import { StyledOverlay, StyledModalBox } from "../../../../styles/modal";

export const AddModal = () =>{
  return(
    <StyledOverlay role="dialog">
      <StyledModalBox>
        <HeaderModal />
        <ModalForm />
      </StyledModalBox>
    </StyledOverlay>
  )
}