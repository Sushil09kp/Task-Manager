function SearchSort({ searchText, onSearchChange, sortBy, onSortChange }) {
  return (
    <div className="search-sort">
      <input
        type="search"
        placeholder="Search tasks..."
        aria-label="Search tasks"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        aria-label="Sort tasks"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="none">Default order</option>
        <option value="dueDate">Due date (soonest first)</option>
        <option value="priority">Priority (High first)</option>
      </select>
    </div>
  )
}

export default SearchSort