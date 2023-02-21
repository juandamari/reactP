import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export function TodoSearch() {
    const {searchValue, setSearchValue } = useContext (TodoContext); //haciendo el llamado de las propiedades que estan en local
    const onSearchValueChange = (event) => { //le doy el valor de set, una vez se realice el evento
        setSearchValue(event.target.value);
    };

    return(
        <input 
        placeholder="Buscar tus tareas" 
        className="w-52 shadow-xl rounded-lg text-center border-2 border-sky-700 bg-gray-200"
        value={searchValue} //dandole set inicial del State
        onChange={onSearchValueChange}
        ></input>
    )
}