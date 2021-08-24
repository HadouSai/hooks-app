import React from "react";
import { TodoListItem } from "./TodoListItem";

interface Props {
  todos: any[];
  handleDelete: Function;
  handleToggle: Function;
}

export const TodoListGroup = ({ handleDelete, handleToggle, todos }: Props) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
