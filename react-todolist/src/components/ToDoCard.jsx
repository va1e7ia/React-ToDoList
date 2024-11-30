import React from "react";

export default function ToDoCard(props) {
  const { children, handleDeleteToDo, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-sharp-duotone fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteToDo(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
