import TodoItem from "./TodoItem";
import "../App.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <TodoItem key={index} item={item} setTodos={setTodos} />)
      ) : (
        <p>Plan the tasks and enjoy your day peacefuly !</p>
      )}
    </ol>
  );
};

export default TodoList;
