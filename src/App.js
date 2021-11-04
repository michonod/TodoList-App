import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "todo_list";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const todoRemoveHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isCompletedHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <h1>Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        todoRemoveHandler={todoRemoveHandler}
        isCompletedHandler={isCompletedHandler}
      />
    </div>
  );
}

export default App;
