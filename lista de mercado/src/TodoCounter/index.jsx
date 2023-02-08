import React from "react"


export function TodoCounter ({total, completed}) {
    return(
        <h2 className='text-2xl font-bold text-fuchsia-700'>Has completado {completed} de {total} TODOs</h2>
    )
}

