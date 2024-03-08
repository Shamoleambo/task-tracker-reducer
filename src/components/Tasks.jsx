import { Task } from './Task'

export function Tasks({ tasks, deleteTask }) {
  return (
    <ul className='tasks'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          done={task.done}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}
