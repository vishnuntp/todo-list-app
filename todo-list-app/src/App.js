import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidCreate } from "uuid";

function App() {
  const [todos, setTodos] = React.useState([
    { title: "Unit testing new feature", id: uuidCreate(), completed: false },
    {
      title: "Design review of UI",
      id: uuidCreate(),
      completed: true,
    },
    { title: "Meeting with BA", id: 3, completed: false },
  ]);
  return (
    <div style={{textAlign:"center"}}>
      <h3>TODO APP</h3>
      <div className="wrapper">
        <TodoInput setTodos={setTodos} />
      </div>
      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );
}

export default App;
