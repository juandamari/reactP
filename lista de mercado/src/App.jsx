import { useState } from 'react'
import './App.css'
import {TodoCounter } from './TodoCounter'
import {TodoList} from './TodoList'
import {TodoSearch} from './TodoSearch' //pascal case
import {CreateTodoButton} from './CreateTodoButton'
import { TodoItem } from './TodoItem'

/* const defaultTodos  = [
  {text: 'cortar cebolla', completed: false},
  {text: 'cortar con la llorona', completed: true},
  {text: 'Tomar curso de intro a React', completed: false},
] */
function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName); //nombre de local storage
  let parseItem; //variable donde se guardan los datos ingresados
  
  if (!localStorageItem) { //condicional cuando es usuario nuevo y no ha creado tareas
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parseItem = initialValue
  } else { //pero si ya tiene elementos mostrarlos en la vairable
    parseItem = JSON.parse(localStorageItem) 
  }
  const [item, setItem] = useState(parseItem);

  const saveItem = (newItem) => { //para guardar en mi local y no se borre al recargar
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  }
  return [
    item,
    saveItem
  ]
}


export function App() {

  const [ todos, saveTodos] = useLocalStorage('TODOS_V1', []) //le doy un nombre y un estado inicial
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <section className='flex flex-col h-screen justify-center items-center bg-blue-700'>
      <div className='space-y-4 w-96 h-auto rounded-lg shadow-xl text-center border-solid border-2 border-sky-500 shadow-blue-500/50 bg-blue-500 '>
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TodoList>
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
        <CreateTodoButton></CreateTodoButton>
      </div>
    </section>
  )
}

