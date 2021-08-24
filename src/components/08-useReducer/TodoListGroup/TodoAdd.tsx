import React from "react";
import useForm from "../../../hooks/useForm";

interface Props {
  handleAddTodo: Function;
}

export const TodoAdd = ({ handleAddTodo }: Props) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar</h4>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Your awesome task"
          value={description}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
