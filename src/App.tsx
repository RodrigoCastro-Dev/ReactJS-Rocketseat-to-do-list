import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TaskList } from './components/TaskList'

export function App() {
  const [content, setContent] = useState<string[]>([])

  return (
    <>
      <Header />
      <TodoForm setContent={setContent}/>
      <TaskList content={content}/>
    </>
  )
}

export default App
