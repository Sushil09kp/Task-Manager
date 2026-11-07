import { useState } from 'react'

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.title)
  const [error, setError] = useState('')

  function startEditing() {
    setDraft(task.title)
    setError('')
    setIsEditing(true)
  }

  function saveEdit() {
    if (draft.trim() === '') {
      setError('Title cannot be empty.')
      return
    }
    onEdit(task.id, draft.trim())
    setIsEditing(false)
  }

  function cancelEdit() {
    setIsEditing(false)
    setError('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') saveEdit()
    if (e.key === 'Escape') cancelEdit()
  }

  function handleDelete() {
    const sure = window.confirm(`Delete "${task.title}"?`)
    if (sure) onDelete(task.id)
  }

  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {isEditing ? (
        <div className="edit-box">
          <input
            type="text"
            className="edit-input"
            aria-label="Edit task title"
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value)
              setError('')
            }}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <span className={task.completed ? 'title done' : 'title'}>
          {task.title}
        </span>
      )}

      <span className="badge">{task.priority}</span>
      <span className="due">{task.dueDate || 'No due date'}</span>

      {isEditing ? (
        <>
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={startEditing}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TaskItem