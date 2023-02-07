import React from "react";

export function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input 
        placeholder="Buscar tus tareas" 
        className="w-52 shadow-xl rounded-lg text-center border-2 border-sky-700 bg-gray-200"
        value={searchValue}
        onChange={onSearchValueChange}
        ></input>
    )
}