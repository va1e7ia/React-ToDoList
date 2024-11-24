import { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTodos } = props;

  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Введите todo..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Добавить
      </button>
    </header>
  );
}
