import { useState } from 'react'

export function AddTask({ addTask }) {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    addTask(text)
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <label htmlFor='taskName'>Task App</label>
      <input
        type='text'
        id='taskName'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
