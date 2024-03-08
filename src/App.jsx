import { useReducer } from 'react'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'
import { taskReducer } from './reducer'
import './App.css'

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, [])

  const addTask = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    dispatch({ type: 'added', id, text })
  }

  const deleteTask = (id) => {
    dispatch({ type: 'deleted', id })
  }

  const doneTask = (id) => {
    dispatch({ type: 'done', id })
  }

  return (
    <div className='container'>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
    </div>
  )
}

export default App
