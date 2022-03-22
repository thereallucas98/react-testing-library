import { TodoPayload } from "../Todo";

import "./styles.css";

interface TodoListProps {
  todos: TodoPayload[];
  setTodos: (todos: TodoPayload[]) => void;
}

function TodoList({ todos, setTodos }: TodoListProps) {
  const totalOfTasksToBeDone = todos.reduce((acc, current) => {
    return !current.completed ? acc += 1 : 0;
  }, 0);

  const updateTask = (id: string) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });

    setTodos(updatedTasks);
  }

  return (
    <div className="todo-list-container">
      <div className="todo-content">
        {
          todos.map((todo, index) => (
            <button
              type="button"
              onClick={() => updateTask(todo.id)}
              className={`todo-item
              ${todo.completed
                &&
                "todo-item-completed"}`}
            >
              <span>{todo.task}</span>
            </button>
          ))
        }
      </div>
      <div className="todo-footer">
        <p>{totalOfTasksToBeDone} {totalOfTasksToBeDone === 1 ? "task" : "tasks"} left</p>
      </div>
    </div>
  );
}

export default TodoList;