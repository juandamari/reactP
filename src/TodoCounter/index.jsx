import React from "react"

export function TodoCounter ({totalTodos, completedTodos}) { //se los doy como parametros para usarlos como hooks
    return(
        <h2 className='text-2xl font-bold text-fuchsia-700'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

