export function Tasks({ tasks }) {
  return (
    <ul className='tasks'>
      {tasks.map((task) => (
        <li key={task.id}>
          <input type='checkbox' name='done' />
          <h2>{task.text}</h2>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  )
}
