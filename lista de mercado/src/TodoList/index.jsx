import React from "react";

export function TodoList(props){
    return(
        <section>
            <li className="list-none">
                {props.children}
            </li>        
        </section>
    )
}