import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import FilterTabs from './components/FilterTabs'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('all')

  function loadTasks() {
    setLoading(true)
    setError('')

    const saved = localStorage.getItem('tasks')
    if (saved) {
      setTasks(JSON.parse(saved))
      setLoading(false)
      return
    }

    fetch('/tasks.json')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load tasks')
        return res.json()
      })
      .then((data) => {
        setTasks(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Something went wrong while loading tasks.')
        setLoading(false)
      })
  }

  useEffect(() => {
    loadTasks()
  }, [])

  function updateTasks(newTasks) {
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  function toggleTask(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    updateTasks(newTasks)
  }

  function addTask(newTask) {
    const task = { id: Date.now(), completed: false, ...newTask }
    updateTasks([...tasks, task])
  }

  function editTask(id, newTitle) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task
    )
    updateTasks(newTasks)
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id)
    updateTasks(newTasks)
  }

  if (loading) return <p>Loading...</p>

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={loadTasks}>Retry</button>
      </div>
    )
  }

  const tasksLeft = tasks.filter((task) => !task.completed).length

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <FilterTabs
        filter={filter}
        onFilterChange={setFilter}
        tasksLeft={tasksLeft}
      />
      <TaskList
        tasks={visibleTasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App