import { FC, MutableRefObject, useState } from "react";
import Card from "./Card";
import AddTodoButton from "./AddTodoButton";
import { FaRegCircle } from "react-icons/fa6";

interface Props {
  setShowTodoEditor: (value: boolean) => void;
  addTodo: (text: string) => void;
  inputElement: MutableRefObject<HTMLInputElement | null>;
}

const TodoEditor: FC<Props> = ({
  setShowTodoEditor,
  addTodo,
  inputElement,
}) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent, todo: string) => {
    event.preventDefault();

    addTodo(todo);
    setShowTodoEditor(false);
    setTodo("");
  };

  return (
    <Card className="flex items-center space-x-5">
      <span className=" text-lg">
        <FaRegCircle className="text-slate-300" />
      </span>
      <form action="" className="flex flex-grow space-x-3">
        <div className="flex flex-col flex-grow space-y-1">
          <input
            type="text"
            className="bg-neutral-50 border-b border-slate-300 focus:outline-none"
            value={todo}
            ref={inputElement}
            onChange={(event) => setTodo(event.target.value)}
          />
          <span className="text-xs text-slate-400">Add Todo Item</span>
        </div>

        <AddTodoButton
          type="submit"
          onClick={(event) => handleSubmit(event, todo)}
          className="p-1 self-center"
        />
      </form>
    </Card>
  );
};

export default TodoEditor;
