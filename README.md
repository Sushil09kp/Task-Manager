# TaskNova

**Plan smarter. Achieve more.** | React Task Manager

TaskNova is a responsive task management app built with React and Vite. It helps users keep track of tasks, set priorities and due dates, and manage their progress.

## Live Demo & Source Code

- **Live Demo:** https://task-manager-ashy-mu-14.vercel.app
- **GitHub Repository:** https://github.com/Sushil09kp/Task-Manager

## Features

- Load initial tasks from `public/tasks.json`.
- Save task data in browser localStorage.
- Add tasks with a title, priority, and optional due date.
- Edit task titles inline.
- Mark tasks as completed or active.
- Delete tasks with confirmation.
- Filter tasks by All, Active, and Completed.
- Search task titles and sort by due date or priority.
- Highlight overdue tasks and show task counts and progress.
- Responsive layout for desktop and mobile screens.

## Tech Stack

React, JavaScript, Vite, HTML, CSS, Browser localStorage

## Getting Started

**Prerequisite:** Node.js and npm installed.

```bash
git clone https://github.com/Sushil09kp/Task-Manager.git
cd Task-Manager
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Production Build

```bash
npm run build
```

The generated files are available in the `dist` folder.

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

## Manual Testing

Main workflows checked in Chrome:

- Create, edit, delete, and complete tasks.
- Filter and search tasks.
- Sort by due date and priority.
- Check overdue indicators.
- Refresh to verify localStorage persistence.
- Review desktop and mobile layout.

## Assumptions & Notes

- Starter tasks load from `public/tasks.json` when no saved task data exists.
- Saved tasks are stored in the current browser and are not synced across devices.
- A task due today is not overdue; overdue status uses the computer's local date.
- Delete confirmation uses the browser's native confirmation dialog.
- Remaining task count includes all incomplete tasks, regardless of filter or search.

## Limitations

This frontend-only project has no backend/database, authentication, or automated test suite.

## About

Created by Susil Kumar Pradhan as a Front End React Intern assignment for HyperApps Technologies.

AI tools were used for learning and debugging support during development. The implementation was reviewed during development.

## Time Spent

Approximately **[7-8]** hours.