import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export function TodoForm(){
    const { 
    addTodo,
    setOpenModal
    } = useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = useState ('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value); // creando la funciona que set el estado del nuevo TODO
    }

    const onCancel = () => {
        setOpenModal(false); // funcion que cierra el modal
    }

    const onSubmit = (event) => {
        event.preventDefault(); //evitar cargar la pagina cada vez que ingresen valores
        addTodo(newTodoValue) //usando la funcion para añadir el nuevo TODO
        setOpenModal(false); // cerrando el modal una vez ingresen valores
        setNewTodoValue('')
    }

    return(
        <form onSubmit={onSubmit} className='w-[90%] max-w-[300px] bg-blue-600 py-8 px-10 flex content-center flex-col rounded-lg ring ring-blue-300 md:ring-blue-500 hover:ring-blue-500'>
            <label className="text-center mb-2">
                Escribe tu nuevo TODO
            </label>
            <textarea 
            className="bg-zinc-600 rounded-lg text-center"
            placeholder="Escribe tu nueva tarea"
            onChange={onChange}
            value={newTodoValue}
            />
            <div>
                <button type="submit" className="rounded-full border-solid bg-lime-500 w-20 mt-2 mx-2.5">
                    Añadir
                </button>

                <button type="button" onClick={onCancel} className="rounded-full border-solid bg-zinc-600 w-20 mt-2 ">
                    Cancelar
                </button>
            </div>
        </form>
    )
}