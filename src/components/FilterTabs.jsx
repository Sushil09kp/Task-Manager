const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

function FilterTabs({ filter, onFilterChange, tasksLeft }) {
  return (
    <div className="filter-bar">
      <div className="tabs">
        {filters.map((item) => (
          <button
            key={item.value}
            className={filter === item.value ? 'tab active' : 'tab'}
            aria-pressed={filter === item.value}
            onClick={() => onFilterChange(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="counter">
        {tasksLeft} {tasksLeft === 1 ? 'task' : 'tasks'} left
      </p>
    </div>
  )
}

export default FilterTabs