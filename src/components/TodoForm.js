import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState({ id: "", task: "", isCompleted: false });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      props.addTodo({ ...todo, id: Math.random() });
      setTodo({ ...todo, task: "" });
    }
  };

  const inputChangeHandler = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input onChange={inputChangeHandler} type="text" value={todo.task} />
      <button className="buttonAdd">Add</button>
    </form>
  );
};

export default TodoForm;
