import React from "react";

export function TodoList(props){
    return(
            <li className="list-none">
                {props.children}
            </li>        
    )
}