function TaskItem({ task, onToggle }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'title done' : 'title'}>
        {task.title}
      </span>
      <span className="badge">{task.priority}</span>
      <span className="due">{task.dueDate || 'No due date'}</span>
    </li>
  )
}

export default TaskItem