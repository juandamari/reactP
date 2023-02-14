import React from "react";

export function TodoForm(){
    return(
        <form >
            <label>...</label>
            <textarea 
            placeholder="Escribe tu nueva tarea"
            />
            <div>
                <button type="submit">
                    Añadir
                </button>

                <button type="button">
                    Cancelar
                </button>
            </div>
        </form>
    )
}