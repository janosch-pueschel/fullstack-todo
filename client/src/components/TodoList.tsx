import { FC, useState } from "react";
import NewTodoItem from "./NewTodoItem";
import Subheading from "./Subheading";
import TodoItem from "./TodoItem";

interface Todos {
  id: number;
  text: string;
  done: boolean;
}

const TodoList: FC = () => {
  const [todos, setTodos] = useState<Todos[]>([
    { id: 1, text: "Rubber cheese camembert de normandie gouda", done: false },
    {
      id: 2,
      text: "Dolcelatte cheesecake paneer halloumi jarlsberg bavarian",
      done: false,
    },
    { id: 3, text: "bergkase who moved", done: true },
    { id: 4, text: "Cheesecake camembert de normandie", done: false },
    { id: 5, text: "Smelly cheese cheese slices cheddar", done: true },
  ]);

  const [showTodoEditor, setShowTodoEditor] = useState(false);

  const toggleTodoDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const addTodo = (todo: string) => {
    if (todo.trim().length !== 0) {
      const newTodo = {
        id: todos.length + 1,
        text: todo,
        done: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  return (
    <>
      <Subheading title="Today's Tasks" />
      <div className="space-y-3">
        {todos.map(({ id, text, done }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            done={done}
            toggleTodoDone={toggleTodoDone}
          />
        ))}

        <NewTodoItem addTodo={addTodo} showTodoEditor={showTodoEditor} setShowTodoEditor={setShowTodoEditor} />
      </div>
    </>
  );
};

export default TodoList;
