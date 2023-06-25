import { HeaderModal } from "./headerModal";
import { ModalForm } from "./modalForm";
import { StyledOverlay, StyledModalBox } from "../../../../styles/modal";
import { useContext, useRef, useEffect } from "react";
import { techContext } from "../../../../providers/techContext";

export const AddModal = () => {
  const modalRef = useRef(null);
  const {setOpenAddModal} = useContext(techContext);

  useEffect(() => {
    const handleOutClick = (event) => {
      if(!modalRef.current?.contains(event.target)){
        setOpenAddModal(false);
      }
    }

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    }

  }, [])

  useEffect(()=> {
    const handleEscapeClick = (event) => event.key ==="Escape" && setOpenAddModal(false);

    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
    }
  }, [])

  return(
    <StyledOverlay role="dialog">
      <StyledModalBox ref={modalRef}>
        <HeaderModal />
        <ModalForm />
      </StyledModalBox>
    </StyledOverlay>
  )
}