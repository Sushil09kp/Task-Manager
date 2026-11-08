Task Manager

A simple and responsive Task Manager application built using React and Vite.

Organize your tasks, manage priorities, set due dates, and track your progress.

Features

- Load starter tasks from a JSON file.
- Save tasks in browser localStorage.
- Add tasks with title, priority, and optional due date.
- Mark tasks as completed or active.
- Edit task titles directly in the task list.
- Delete tasks with confirmation.
- Filter tasks by All, Active, and Completed.
- Search tasks by title.
- Sort tasks by due date or priority.
- Display overdue tasks.
- Show remaining incomplete task count.
- Responsive layout for desktop and mobile screens.

Technologies Used

- React
- JavaScript
- Vite
- HTML
- CSS
- Browser localStorage

How to Run

1. Clone the repository:
   
   git clone https://github.com/Sushil09kp/Task-Manager.git

2. Open the project folder:
   
   cd Task-Manager

3. Install dependencies:
   
   npm install

4. Start the development server:
   
   npm run dev

5. Open the application in your browser:
   
   "http://localhost:5173"

Project Structure

Task-Manager/
├── public/
│   └── tasks.json
├── src/
│   ├── components/
│   │   ├── FilterTabs.jsx
│   │   ├── SearchSort.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── utils/
│   │   └── taskHelpers.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md

## Testing

The application was manually tested in Chrome.

- Task creation, editing, deletion, and completion.
- Filtering and searching.
- Due date and priority sorting.
- Overdue task detection.
- localStorage persistence.
- Desktop and mobile responsive layout.

## Assumptions

- Tasks are stored in browser localStorage after the initial load.
- Starter tasks are loaded from `public/tasks.json` when no saved tasks exist.
- Tasks remain stored locally in the browser.
- A task due today is not considered overdue.
- Overdue status is calculated using the local computer date.
- Delete confirmation uses the browser's native confirmation dialog.
- The remaining task counter includes all incomplete tasks, regardless of active filters or search.

## Limitations

- No backend or database.
- No user authentication.
- No automated tests.
- No undo delete functionality.
- No theme switcher.
- No deployed production URL.

## Development Notes

This project was developed as a frontend assignment.

I used AI assistance as a learning and debugging resource and reviewed the implementation to understand the code and functionality.

## Time Spent

Approximately [ADD YOUR ACTUAL HOURS] hours.