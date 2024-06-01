import React from "react";
import "../App.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const TodoItem = ({ item, setTodos }) => {
  const itemCompleted = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  return (
    <li id={item?.id} className="todo_item">
      <div>
        <button className="todo_items_left" onClick={itemCompleted}>
          {!item.completed ? (
            <CheckBoxOutlineBlankOutlinedIcon />
          ) : (
            <CheckBoxOutlinedIcon />
          )}
        </button>
      </div>
      <div>
        <p style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
      </div>
      <div className="todo_items_right">
        <button onClick={deleteTask}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
