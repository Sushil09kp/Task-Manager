import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [dueDate, setDueDate] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (title.trim() === '') {
      setError('Please enter a task title.')
      return
    }

    onAdd({
      title: title.trim(),
      priority,
      dueDate: dueDate || null,
    })

    setTitle('')
    setPriority('Medium')
    setDueDate('')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          aria-label="Task title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setError('')
          }}
        />
        <select
          aria-label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="date"
          aria-label="Due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default TaskForm