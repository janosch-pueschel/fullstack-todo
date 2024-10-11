import { FC, useEffect, useRef, useState } from "react";

import { FaRegCircle, FaCheck } from "react-icons/fa6";

import Card from "./Card";

interface Props {
  setShowTodoEditor?: (value: boolean) => void;
  showTodoEditor?: boolean;
  addTodo?: (text: string) => void;

  setShowUpdateEditor?: (value: boolean) => void;
  updateTodo?: (id: number, text: string) => void;
  id?: number;
  text?: string;
}

const TodoEditor: FC<Props> = ({
  setShowTodoEditor,
  showTodoEditor,
  addTodo,
  setShowUpdateEditor,
  updateTodo,
  id,
  text,
}) => {
  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [showTodoEditor, text]);

  const [todo, setTodo] = useState(text || "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (addTodo && setShowTodoEditor) {
      addTodo(todo);
      setShowTodoEditor(false);
      setTodo("");
    } else if (updateTodo && setShowUpdateEditor && id) {
      updateTodo(id, todo);
      setShowUpdateEditor(false);
      setTodo("");
    }
  };

  return (
    <Card className="flex space-x-5">
      <span className=" text-lg">
        <FaRegCircle className="text-slate-300" size={20} />
      </span>
      <form action="" className="flex flex-grow space-x-3">
        <div className="flex flex-col flex-grow space-y-1">
          <input
            type="text"
            className="bg-neutral-50 border-b border-slate-300 focus:outline-none leading-5"
            value={todo}
            ref={inputElement}
            onChange={(event) => setTodo(event.target.value)}
          />
          <span className="text-xs text-slate-400">
            {showTodoEditor ? "Add" : "Update"} Todo Item
          </span>
        </div>

        <button
          type="submit"
          onClick={(event) => handleSubmit(event)}
          className="text-blue-600 h-fit"
        >
          <FaCheck size={20} />
        </button>
      </form>
    </Card>
  );
};

export default TodoEditor;
