import React from "react";

const Todo = (props) => {
  const todoDelete = () => {
    props.todoRemoveHandler(props.todo.id);
  };
  const checkBoxHandler = () => {
    props.isCompletedHandler(props.todo.id);
  };
  return (
    <div className="todo_box">
      <input type="checkbox" onClick={checkBoxHandler} />
      <li
        style={{
          textDecoration: props.todo.isCompleted ? "line-through" : null,
        }}
      >
        {props.todo.task}
      </li>
      <button className="buttonDelete" onClick={todoDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
