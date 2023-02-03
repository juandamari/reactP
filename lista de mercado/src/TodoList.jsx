import React from "react";

export function TodoList(props){
    return(
        <section>
            <lu>
                {props.children}
            </lu>        
        </section>
    )
}