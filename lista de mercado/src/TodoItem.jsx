import React from "react";

export function TodoItem (props){
    return(
        <li>
            <span>x</span>
            <p>{props.text}</p>
            <span>c</span>
        </li>
    )
}