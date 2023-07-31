import { EditModalForm } from "./editModalForm";
import { EditModalHeader } from "./editmodalheader";
import { StyledOverlay } from "../../../../styles/modal";
import { StyledModalBox } from "../../../../styles/modal";
import { useContext, useEffect, useRef } from "react";
import { techContext } from "../../../../providers/techContext";


export const EditModal = () =>{
  const modalRef = useRef(null);
  const {setOpenEditModal} = useContext(techContext);

  useEffect(() => {
    const handleOutClick = (event) => {
      if(!modalRef.current.contains(event.target)){
        setOpenEditModal(false);
      }
    }

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    }

   
  }, [])

  useEffect(() => {
    const handleEscapeClick  = (event) => {
      if(event.key === "Escape"){
        setOpenEditModal(false);
      }
    }

    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
    }
  }, [])


   return(
    <div role="dialog">
      <div>
        <form>
          
        </form>
      </div>
    </div>
  )
}