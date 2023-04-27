import React from "react";

export function TodoList(props){
    return(
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResults(props.searchText)}

            {props.searchedTodos?.map(props.render || props.children)} 


            <ul className="list-none">
                {props.children}
            </ul>

        </section>
    )
}

