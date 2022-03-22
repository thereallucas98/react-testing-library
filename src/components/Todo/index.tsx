import { useState } from "react";
import AddInput from "../AddInput";
import TodoList from "../TodoList";

import "./styles.css";

export interface TodoPayload {
  id: string;
  task: string;
  completed: boolean;
}

function TodoBox() {
  const [todos, setTodos] = useState<TodoPayload[]>([]);

  return (
    <div className="todo-container">
      <AddInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoBox;
