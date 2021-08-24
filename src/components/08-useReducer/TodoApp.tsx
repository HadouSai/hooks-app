import React, { useEffect, useReducer } from "react";
import useForm from "../../hooks/useForm";
import "./styles.css";
import { TodoAdd } from "./TodoListGroup/TodoAdd";
import { TodoListGroup } from "./TodoListGroup/TodoListGroup";
import { initialState, todoReducer } from "./todoReducer";

interface Props {}

const init = () => {
  /* return [
    {
      id: new Date().getTime(),
      desc: "REACT",
      done: false,
    },
  ]; */

  return JSON.parse(localStorage.getItem("todos") || "[]") || [];
};

export const TodoApp = (props: Props) => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId: number) => {
    const action = {
      type: "DELETE",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId: number) => {
    const action = {
      type: "TOGGLE",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleAddTodo = (newTodo: any) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1> TODO APP ({todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoListGroup
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
