export function Task({text, done}) {
  return (
    <li>
      <input type='checkbox' name='done' />
      <h2>{text}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  )
}
