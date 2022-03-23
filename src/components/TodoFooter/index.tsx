import "./styles.css";

interface TodoFooterProps {
  amountOfTasksToDo: number;
}

function TodoFooter({ amountOfTasksToDo }: TodoFooterProps) {
  return (
    <div className="todo-footer">
      <p>{amountOfTasksToDo} {amountOfTasksToDo === 1 ? "task" : "tasks"} left</p>
    </div>
  );
}

export default TodoFooter;
