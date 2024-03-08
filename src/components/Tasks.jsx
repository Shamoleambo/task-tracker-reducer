import { Task } from './Task'

export function Tasks({ tasks, deleteTask, doneTask }) {
  return (
    <ul className='tasks'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          done={task.done}
          deleteTask={deleteTask}
          doneTask={doneTask}
        />
      ))}
    </ul>
  )
}
