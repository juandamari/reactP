import React, {useContext} from "react";
import { createPortal } from "react-dom";
/* import './modal.css'; */
import { TodoContext } from "../TodoContext";

export function Modal({ children,}){
    const {
        openModal,
        setOpenModal,
    } = useContext (TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal)
    }
    return createPortal (
        <div className="ModalBackground flex-col inset-[-10px]">
            {children}
            <button className="mt-4" onClick={onClickButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>    
        </div>,
        document.getElementById('modal')
    )
}