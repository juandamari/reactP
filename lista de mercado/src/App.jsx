import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import {TodoCounter } from './TodoCounter'
import {TodoList} from './TodoList'
import {TodoSearch} from './TodoSearch' //pascal case
import {CreateTodoButton} from './CreateTodoButton'
import { TodoItem } from './TodoItem'

export function App() {
  const todos = [
    {text: 'cortar cebolla', complete: false},
    {text: 'cortar con la llorona', complete: false},
    {text: 'Tomar curso de intro a React', complete: false}
  ]

  return (
    <section className='flex flex-col h-screen justify-center items-center bg-blue-700'>
      <div className='space-y-4 w-96 h-96 rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 '>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {todos.map(todo =>(
          <TodoItem text={todo.text}/>
        ))}

      </TodoList>
      <CreateTodoButton></CreateTodoButton>
      </div>
    </section>
  )
}

