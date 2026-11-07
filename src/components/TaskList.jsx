import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onEdit }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default TaskList