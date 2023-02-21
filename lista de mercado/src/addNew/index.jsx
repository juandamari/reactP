import React from "react";

export function AddNewTodo (){
    return(
        <section className='relative bg-blue-700'>
            <div className='absolute space-y-4 w-auto h-auto rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 left-10 top-1'>
                <img src="../../public/imagenes/icontarea.png" alt="imagen de tarea" className="w-11 left-10"/> 
                <h3>crea tus nuevas tareas pendietes!</h3>
            </div>
        </section>
    )
}