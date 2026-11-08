import { useState } from 'react'
import { isOverdue } from '../utils/taskHelpers'

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(task.title)
  const [error, setError] = useState('')

  const overdue = isOverdue(task)

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
    <li className={`task-item priority-${task.priority.toLowerCase()}`}>
      <input
        type="checkbox"
        aria-label={`Mark "${task.title}" as completed`}
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div className="task-body">
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

        <div className="task-meta">
          <span className={`badge badge-${task.priority.toLowerCase()}`}>
            {task.priority}
          </span>
          <span className="due">{task.dueDate || 'No due date'}</span>
          {overdue && <span className="overdue">Overdue</span>}
        </div>
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button onClick={saveEdit}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={startEditing}>Edit</button>
            <button className="btn-delete" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default TaskItem