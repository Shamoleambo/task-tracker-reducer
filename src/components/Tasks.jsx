import { Task } from './Task'

export function Tasks({ tasks }) {
  return (
    <ul className='tasks'>
      {tasks.map((task) => (
        <Task key={task.id} text={task.text} done={task.done} />
      ))}
    </ul>
  )
}
