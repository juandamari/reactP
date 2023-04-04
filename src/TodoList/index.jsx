import React from "react";

export function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}

            {props.searchedTodos?.map(props.render)}

            <ul className="list-none">
                {props.childre}
            </ul>

        </section>
    )
}