import { isOverdue } from '../utils/taskHelpers'
import './DashboardSummary.css'

function DashboardSummary({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length

  const activeTasks = tasks.filter((task) => !task.completed).length

  const overdueTasks = tasks.filter((task) => isOverdue(task)).length

  const progress = tasks.length === 0
    ? 0
    : Math.round((completedTasks / tasks.length) * 100)

  return (
    <section className="dashboard-summary">
      <div className="summary-header">
        <h2>Today's Overview</h2>
        <p>Your productivity at a glance.</p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <span className="summary-label">Completed</span>
          <strong className="summary-number">{completedTasks}</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">Active</span>
          <strong className="summary-number">{activeTasks}</strong>
        </div>

        <div className="summary-card">
          <span className="summary-label">Overdue</span>
          <strong className="summary-number overdue-number">
            {overdueTasks}
          </strong>
        </div>
      </div>

      <div className="progress-section">
        <div className="progress-header">
          <span>Overall progress</span>
          <strong>{progress}%</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="Task completion progress"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  )
}

export default DashboardSummary