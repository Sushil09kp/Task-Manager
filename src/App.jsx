import { useState, useEffect } from 'react'
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
    <div>
      <h1>Task Manager</h1>
      <p>{tasks.length} tasks loaded</p>
    </div>
  )
}

export default App