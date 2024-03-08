import { useState } from 'react'
import { AddTask } from './components/AddTask'

const initialTasks = [{ id: 1, text: 'Go somewhere', done: false }]

function App() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className='container'>
      <AddTask />
    </div>
  )
}

export default App
