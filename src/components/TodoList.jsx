import React from "react";
import Todo from "./Todo";

function TodoList({todos, setTodos,filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-List">
        {filteredTodos.map((todo) => (
          <Todo 
          text = {todo.text} 
          todo ={todo}
          key = {todo.id}
          todos = {todos}
          setTodos = {setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
