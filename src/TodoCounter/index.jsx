import React, { useContext } from "react"
import { TodoContext } from "../TodoContext"


export function TodoCounter () { //en parametros usaba props, ahora con 'usecontext' los reutilizo
    const {totalTodos, completedTodos} = useContext(TodoContext);
    return(
        <h2 className='text-2xl font-bold text-fuchsia-700'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

