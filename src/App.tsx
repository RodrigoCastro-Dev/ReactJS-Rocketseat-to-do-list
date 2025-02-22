import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TaskList } from './components/TaskList'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <TodoForm setCount={setCount}/>
      <TaskList count={count}/>
    </>
  )
}

export default App
