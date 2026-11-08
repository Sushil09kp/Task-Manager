# TaskNova – Task Manager

TaskNova is a responsive task management app built with React and Vite. It helps users keep track of tasks, set priorities and due dates, and manage their progress.

## Live Demo

[Open TaskNova](https://task-manager-ashy-mu-14.vercel.app)

## GitHub Repository

[View Source Code](https://github.com/Sushil09kp/Task-Manager)

## Features

- Load initial tasks from `public/tasks.json`.
- Save task data in browser `localStorage`.
- Add tasks with a title, priority, and optional due date.
- Edit task titles inline.
- Mark tasks as completed or active.
- Delete tasks with confirmation.
- Filter tasks by All, Active, and Completed.
- Search tasks by title.
- Sort tasks by due date or priority.
- Highlight overdue tasks.
- Show task counts and completion progress.
- Responsive layout for desktop and mobile screens.

## Tech Stack

- React
- JavaScript
- Vite
- HTML
- CSS
- Browser localStorage

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

```bash
git clone https://github.com/Sushil09kp/Task-Manager.git
cd Task-Manager
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Production Build

To create a production build, run:

```bash
npm run build
```

The generated files will be available in the `dist` folder.

## Project Structure

```text
Task-Manager/
├── public/
│   └── tasks.json
├── src/
│   ├── components/
│   │   ├── DashboardSummary.jsx
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
```

## Testing

I manually checked the main task workflows in Chrome, including:

- Adding, editing, deleting, and completing tasks.
- Filtering and searching tasks.
- Sorting by due date and priority.
- Checking overdue task indicators.
- Refreshing the page to verify saved tasks.
- Checking the layout on desktop and mobile screen sizes.

## Notes

- Initial tasks are loaded from `public/tasks.json` when there is no saved task data.
- After that, task changes are stored in browser `localStorage`.
- Tasks due today are not marked as overdue.
- Overdue status is calculated using the computer's local date.
- The remaining task count includes all incomplete tasks, regardless of the selected filter or search.
- Task data is stored in the current browser and is not synced across devices.

## Limitations

This is a frontend-only project. It does not include a backend, database, authentication, or automated tests.

## About

Created by **Susil Kumar Pradhan** as a Front End React Intern assignment for **HyperApps Technologies**.

AI tools were used for learning and debugging support during development. I reviewed the implementation and worked through the application features during development.