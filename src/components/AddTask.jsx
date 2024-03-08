export function AddTask() {
  return (
    <form className='form'>
      <label htmlFor='taskName'>Task App</label>
      <input type='text' id='taskName' />
      <button type='submit'>Add</button>
    </form>
  )
}
