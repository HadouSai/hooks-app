import React from "react";

interface Props {
  todo: any;
  handleDelete: Function;
  handleToggle: Function;
}

export const TodoListItem = ({ handleDelete, handleToggle, todo }: Props) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {todo.desc}
      </p>

      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};
