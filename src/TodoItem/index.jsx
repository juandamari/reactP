import React from "react";

export function TodoItem (props){
    return(
            <li className="shadow-md w-auto  rounded border-2 border-sky-500 place-content-center list-none p-6 flex justify-between mb-1">
                <span onClick={props.onComplete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="justify-items-center w-6 h-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                </span>

                <p className={`${props.completed && 'line-through'}`} >{props.text}</p>
                
                <span onClick={props.onDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:animate-spin hover:bg-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </li>
    )
}