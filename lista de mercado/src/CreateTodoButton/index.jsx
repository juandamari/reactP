import React from "react";


export function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(true);
    };
    return(
        <button onClick={onClickButton}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    )
}
