import { useState, useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newToDo) {
    const newTodoList = [...todos, newToDo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteToDo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteToDo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem(todos);
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <>
        <ToDoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos}
        />
        <ToDoList
          handleEditTodo={handleEditTodo}
          handleDeleteToDo={handleDeleteToDo}
          todos={todos}
        />
      </>
    </>
  );
}

export default App;
