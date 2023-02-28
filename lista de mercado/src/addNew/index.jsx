import React from "react";

export function AddNewTodo (){
    return(
        <section className=' bg-blue-700 rounded-lg'>
            <div className='space-y-4 shadow-xl text-center shadow-blue-500/50 bg-blue-500 top-1'>
                <img src="../../public/imagenes/icontarea.png" alt="imagen de tarea" className="w-[80px] inline-block text-center p-2"/> 
                
                <div className="flex m-5 space-x-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 bg-[#61dafa] rounded-full text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg> 
                <h3 className="">crea tus nuevas tareas pendietes!</h3>
                </div>

            </div>
        </section>
    )
}