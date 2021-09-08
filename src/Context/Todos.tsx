import React, { useContext } from "react";
import TodosProvider, { TodosContext } from "./TodosContext";

const Todos = () => {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("new todo")}>add todo</button>
    </div>
  );
};

export default () => (
  <TodosProvider>
    <Todos />
  </TodosProvider>
);