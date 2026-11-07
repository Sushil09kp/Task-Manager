const priorityOrder = { High: 0, Medium: 1, Low: 2 }

export function getVisibleTasks(tasks, filter, searchText, sortBy) {
  const search = searchText.trim().toLowerCase()

  const result = tasks.filter((task) => {
    if (filter === 'active' && task.completed) return false
    if (filter === 'completed' && !task.completed) return false
    return task.title.toLowerCase().includes(search)
  })

  if (sortBy === 'dueDate') {
    result.sort((a, b) => {
      if (!a.dueDate && !b.dueDate) return 0
      if (!a.dueDate) return 1
      if (!b.dueDate) return -1
      return a.dueDate.localeCompare(b.dueDate)
    })
  }

  if (sortBy === 'priority') {
    result.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
  }

  return result
}

function getTodayString() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function isOverdue(task) {
  if (task.completed || !task.dueDate) return false
  return task.dueDate < getTodayString()
}