import React from "react";
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter';
import {TodoList} from '../TodoList'
import {TodoSearch} from '../TodoSearch' //pascal case
import {CreateTodoButton} from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { LoadingPage } from "../NotFound/NotFound";

export function AppUI() {
    return (
      <section className='flex flex-col h-screen justify-center items-center bg-blue-700'>
        <div className='space-y-4 w-96 h-auto rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 '>
          <TodoCounter/>
          <TodoSearch/>
          
          <TodoContext.Consumer>
            {({
              error,
              loading,
              searchedTodos,
              completeTodo,
              deleteTodo,
            }) => (
              <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <LoadingPage/>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => (
                  <TodoItem
                    text={todo.text}
                    key={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            ) }
          </TodoContext.Consumer>
          <CreateTodoButton></CreateTodoButton>
        </div>
      </section>
    )
  }