export function Task({ id, text, done, deleteTask }) {
  return (
    <li>
      <input type='checkbox' name='done' checked={done} />
      <h2>{text}</h2>
      <button>Edit</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  )
}
