import { useReducer } from 'react'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'
import './App.css'

const initialTasks = [{ id: 1, text: 'Go somewhere', done: false }]

function App() {
  const taskReducer = (tasks, action) => {
    if (action.type === 'added')
      return [...tasks, { id: action.id, text: action.text, done: false }]
    else if (action.type === 'deleted')
      return tasks.filter((task) => task.id !== action.id)
    else if (action.type === 'done')
      return tasks.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      )
  }

  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

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
