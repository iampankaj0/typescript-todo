import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  item: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ item, todos, setTodos }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditable = () => {
    setIsEdit(true);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : item))
    );
    setIsEdit(false);
  };

  return (
    <form
      className="todos__single"
      style={{
        backgroundColor: item.isDone ? "grey" : "",
        boxShadow: item.isDone ? "inset 0 0 10px #fff" : "",
      }}
    >
      {isEdit ? (
        <>
          <input
            type="text"
            name="todo"
            className="input__edit"
            placeholder="Type Something..."
            style={{ width: "100%", height: "100%" }}
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <span
            className="edit_done_icon"
            title="save"
            onClick={(e) => handleEdit(e, item.id)}
          >
            <MdDone />
          </span>
        </>
      ) : (
        <span
          className="todos__single--text"
          style={{
            textDecoration: item.isDone ? "line-through" : "",
          }}
        >
          {item.todo}
        </span>
      )}
      <div style={{ display: isEdit ? "none" : "" }}>
        {!item.isDone && (
          <span className="icon" title="Edit" onClick={() => handleEditable()}>
            <AiFillEdit />
          </span>
        )}

        <span
          className="icon"
          title="Delete"
          onClick={() => handleDelete(item.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className={`icon ${item.isDone ? "doneTrue" : ""}`}
          title="Done"
          onClick={() => handleDone(item.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
