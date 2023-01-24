import { useState } from 'react'
import './App.css'
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
    <section>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {todos.map(todo =>(
          <TodoItem text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
    </section>
  )
}

