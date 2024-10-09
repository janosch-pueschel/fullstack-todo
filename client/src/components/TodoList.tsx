import NewTodoItem from "./NewTodoItem";
import Subheading from "./Subheading";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <>
      <Subheading title="Today's Tasks" />
      <div className="space-y-3">
        <TodoItem />
        <NewTodoItem />
      </div>
    </>
  );
}
