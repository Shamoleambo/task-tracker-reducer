export function Task({ id, text, done, deleteTask, doneTask }) {
  return (
    <li>
      <input type='checkbox' name='done' checked={done} onChange={() => doneTask(id)} />
      <h2>{text}</h2>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  )
}
