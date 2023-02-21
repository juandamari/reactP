import React, { useContext } from "react";
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter';
import {TodoList} from '../TodoList'
import { ErrorPages } from '../error404'
import {TodoSearch} from '../TodoSearch' //pascal case en la funcion para hacer el import
import {CreateTodoButton} from '../CreateTodoButton'
import { TodoItem } from '../TodoItem'
import { TodoForm } from '../todoForm'
import { LoadingPage } from "../Pagescharging";
import { Modal} from '../Modal'
import { AddNewTodo } from "../addNew";

export function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext); //aca llama directamente los parametros en vez de poner 'value' a cada propiedad que lo necesite, por ser función
              
    return (
      <section className='flex flex-col justify-center items-center bg-blue-700 h-screen'>
        <div className='space-y-4 w-auto h-auto rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 '>
          <TodoCounter/>
          <TodoSearch/>

          <TodoList>
            {error && <ErrorPages/>}
            {loading && <LoadingPage />}
            {(!loading && !searchedTodos.length) && <AddNewTodo/>}

            {searchedTodos.map((todo) => (
              <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
              ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}
          
          <CreateTodoButton setOpenModal={setOpenModal}/>

        </div>
      </section>
    )
  }

/*   const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: true },
    { text: 'LALALALAA', completed: false },
  ]; */