export function Task({ id, text, done, deleteTask, doneTask }) {
  return (
    <li className='singleTask'>
      <span className='taskInfo'>
        <input
          type='checkbox'
          name='done'
          checked={done}
          onChange={() => doneTask(id)}
        />
        <h2>{text}</h2>
      </span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  )
}
