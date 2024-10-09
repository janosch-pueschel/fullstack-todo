import { useState } from "react";
import NewTodoItem from "./NewTodoItem";
import Subheading from "./Subheading";
import TodoItem from "./TodoItem";

interface Todos {
  id: number;
  text: string;
  done: boolean;
}

export default function TodoList() {
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

  const toggleTodoDone = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
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

        <NewTodoItem />
      </div>
    </>
  );
}
