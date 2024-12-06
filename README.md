# Todo Application

This is a simple Todo application built using React. The app allows users to manage their tasks with the following features:

- **Add Todo**: Create new tasks with unique text.
- **Mark as Completed**: Toggle the status of a task.
- **Delete Todo**: Remove specific tasks from the list.
- **Clear Completed**: Remove all tasks that are marked as completed.
- **Persistent Data**: Stores todos in `localStorage` to maintain data across browser sessions.
## Project Structure

src/app/App.module.css          # Styles for the App component
src/app/index.jsx               # Root App component

src/entities/Todo/reducer.js    # State management logic

src/features/AddTodo/AddTodo.module.css  # Styles for AddTodo component
src/features/AddTodo/index.jsx           # Component to add new todos

src/widgets/TodoList/TodoList.module.css # Styles for TodoList component
src/widgets/TodoList/index.jsx           # Component to display todos

src/widgets/TodoStats/TodoStats.module.css # Styles for TodoStats component
src/widgets/TodoStats/index.jsx            # Component to display todo stats

src/shared/styles/global.css    # Global application styles

src/index.js                    # Application entry point

## Installation and Usage

### Prerequisites
- Node.js (version 16+ recommended)
- npm or yarn

### Installation Steps
1. Clone the repository:
   git clone [https://github.com/ScriptForgeCraft/ScriptForgeCraft.github.io.git]
2. Navigate to the project directory:
   cd todo-app
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open the application in your browser at [http://localhost:3000].

### Available Scripts
- `npm start`: Runs the app in development mode. Open [http://localhost:3000] to view it in the browser.
- `npm run build`: Builds the app for production to the build folder. It bundles React in production mode and optimizes the build for best performance.

## How to Contribute
1. Fork the repository.
2. Create a feature branch:
   git checkout -b feature-name
3. Commit your changes:
   git commit -m "Add a meaningful message"
4. Push to the branch:
   git push origin feature-name
5. Create a pull request.

 
