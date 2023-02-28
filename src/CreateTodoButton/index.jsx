import React from "react";
import './createButtom.css';


export function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)//con prevstate creo el switch con el que abre y cierra el boton
    }
    return(
        <button className="CreateTodoButton" onClick={onClickButton} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    )
}
