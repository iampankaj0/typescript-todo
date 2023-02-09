import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  return (
    <div className="todo__list">
      {todos.map((item) => (
        <SingleTodo
          item={item}
          key={item.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
