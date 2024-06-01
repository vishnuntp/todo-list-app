import React from "react";
import { v4 as uuidCreate } from "uuid";
import "../App.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const TodoInput = ({ setTodos }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value;

    setTodos((prevTodos) => [
      ...prevTodos,
      { title: value, id: uuidCreate(), completed: false },
    ]);
    event.target.reset();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input type="text" name="todo" id="todo" placeholder="What's next ?" />
      </label>
      <button>
        <AddOutlinedIcon />
      </button>
    </form>
  );
};

export default TodoInput;
