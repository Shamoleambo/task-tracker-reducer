import { useState } from 'react'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'
import './App.css'

const initialTasks = [{ id: 1, text: 'Go somewhere', done: false }]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  const addTask = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    setTasks((prevState) => [...prevState, { id, text, done: false }])
  }

  return (
    <div className='container'>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
