import React from "react";

export function AddNewTodo (){
    return(
        <section className=' bg-blue-700 rounded-lg'>
            <div className='space-y-4 shadow-xl text-center shadow-blue-500/50 bg-blue-500 top-1'>
                <img src="../../public/imagenes/icontarea.png" alt="imagen de tarea" className="w-[80px] inline-block text-center p-2"/> 
                <h3>crea tus nuevas tareas pendietes!</h3>
            </div>
        </section>
    )
}