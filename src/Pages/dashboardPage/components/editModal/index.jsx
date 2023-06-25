import { EditModalForm } from "./editModalForm";
import { EditModalHeader } from "./editmodalheader";
import { StyledOverlay } from "../../../../styles/modal";
import { StyledModalBox } from "../../../../styles/modal";


export const EditModal = () =>{
   return(
    <StyledOverlay role="dialog">
      <StyledModalBox>
        <EditModalHeader />
        <EditModalForm />
      </StyledModalBox>
    </StyledOverlay>
  )
}