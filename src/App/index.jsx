import React from 'react';
import { TodoCounter } from '../TodoCounter';
import {TodoList} from '../TodoList';
import { ErrorPages } from '../error404';
import {TodoSearch} from '../TodoSearch' //pascal case en la funcion para hacer el import
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../todoForm';
import { LoadingPage } from "../Pagescharging";
import { Modal} from '../Modal';
import { AddNewTodo } from "../addNew";
import { todoUse } from './todoUse';


export function App(){
const   {
  error,
  loading,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
  totalTodos,
  searchValue,
  setSearchValue,
  addTodo,
  completedTodos,
} = todoUse();
  return (
    <section className='flex flex-col justify-center items-center bg-blue-700 h-screen'>
      <div className='space-y-4 w-[320px] h-auto p-2 rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 '>
        <TodoCounter
         completedTodos={completedTodos}
         totalTodos={totalTodos}
        />

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={()=> <ErrorPages />}
        onLoading={()=> <LoadingPage />}
        onEmptyTodos={()=> <AddNewTodo />}
        onEmptyResults={(searchText)=> <p>No hay resultado para {searchText}</p>}
        render={todo => (
          <TodoItem   //esto es render prop
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
          />
          )}
        />


        {!!openModal && (
          <Modal>
            <TodoForm
              setOpenModal={setOpenModal}
              addTodo={addTodo}
            />
          </Modal>
        )}
        
        <CreateTodoButton setOpenModal={setOpenModal}/>

      </div>
    </section>
  )
}
