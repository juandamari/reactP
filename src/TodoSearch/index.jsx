import React from "react";

export function TodoSearch({searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => { //le doy el valor de set, una vez se realice el evento
        setSearchValue(event.target.value);
    };

    return(
        <>
        <input 
        placeholder="Buscar tus tareas" 
        className="w-52 shadow-xl rounded-lg text-center border-2 border-sky-700 bg-gray-200"
        value={searchValue} //dandole set inicial del State
        onChange={onSearchValueChange}
        ></input>
        <h3>Tus tareas de hoy</h3>
        </>
    )
}