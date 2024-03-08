import { useState } from 'react'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'
import './App.css'

const initialTasks = [{ id: 1, text: 'Go somewhere', done: false }]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className='container'>
      <AddTask />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
