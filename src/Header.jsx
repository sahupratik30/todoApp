import React, { useEffect, useState } from "react";
import Form from "./Form";
import Lists from "./Lists";

const Header = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  // Getting the todos from localStorage
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    if (getTodos) {
      setTodos(getTodos);
    }
  }, []);
  // Saving the todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleDelete = (todoId) => {
    if (window.confirm("Are you sure?")) {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodos);
    }
  };
  const handleDone = (todoId) => {
    const index = todos.findIndex((todo) => todo.id === todoId);
    const duplicateTodos = [...todos];
    duplicateTodos[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };
    setTodos(duplicateTodos);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todo.length < 5) {
      setError("Minimum 5 characters required!");
      return false;
    }
    setTodo("");
    setError(null);
    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
  };
  return (
    <>
      <div className="main">
        <div className="card col-lg-6 col-md-8 col-10 mx-auto">
          <div className="card-body">
            <h3 className="text-center text-capitalize text-white bg-success py-2 font-weight-bold rounded mb-3">
              Todo List
            </h3>
            <Form
              submit={submitHandler}
              todo={todo}
              change={(e) => setTodo(e.target.value)}
              error={error}
            />
            <Lists todos={todos} del={handleDelete} done={handleDone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
