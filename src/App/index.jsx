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
        AddNewTodo={AddNewTodo}
        onError={()=> <ErrorPages />}
        onLoading={()=> <LoadingPage />}
        onEmptyTodos={()=> <AddNewTodo />}
        render={todo => (
          <TodoItem
          key={todo.text} //agregar id= id para intentar quitar el bug
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
          )}
        />

        {/* <TodoList>
          {error && <ErrorPages error={error}/>}
          {loading && <LoadingPage />}
          {(!loading && !searchedTodos.length) && <AddNewTodo/>}

          {searchedTodos.map((todo) => (
            <TodoItem
            key={todo.text} //agregar id= id para intentar quitar el bug
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList> */}

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
