import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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

  if (loading) return <p>Loading...</p>

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={loadTasks}>Retry</button>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  )
}

export default App