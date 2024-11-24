import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos(newToDo) {
    const newTodoList = [...todos, newToDo];
    setTodos(newTodoList);
  }

  function handleDeleteToDo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditToDo(index) {}

  return (
    <>
      <>
        <ToDoInput handleAddTodos={handleAddTodos} />
        <ToDoList handleDeleteToDo={handleDeleteToDo} todos={todos} />
      </>
    </>
  );
}

export default App;
