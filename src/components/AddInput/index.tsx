import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoPayload } from "../Todo";

import "./styles.css";

interface AddInputProps {
  todos: TodoPayload[];
  setTodos: (todos: TodoPayload[]) => void;
}

function AddInput({ todos, setTodos }: AddInputProps) {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    const updatedTodos: TodoPayload[] = [
      ...todos,
      {
        id: uuid(),
        task: todo,
        completed: false,
      }
    ];

    setTodos(updatedTodos);
    setTodo("");
  }

  return (
    <div className="add-input-container">
      <input
        type="text"
        value={todo}
        placeholder="Add a new task here..."
        onChange={(e) => setTodo(e.target.value)}
      />

      <button type="button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default AddInput;
