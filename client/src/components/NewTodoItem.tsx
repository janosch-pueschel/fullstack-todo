import { FaRegCircle } from "react-icons/fa6";
import Card from "./Card";
import AddTodoButton from "./AddTodoButton";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const NewTodoItem: FC<Props> = ({ addTodo }) => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [showTodoInput]);

  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent, todo: string) => {
    event.preventDefault();

    addTodo(todo);
    setShowTodoInput(false);
    setTodo("");
  };

  return (
    <>
      <Card
        className={`${
          showTodoInput ? "block" : "hidden"
        } flex items-center space-x-5`}
      >
        <span className=" text-lg">
          <FaRegCircle className="text-slate-300" />
        </span>
        <form action="" className="flex flex-grow space-x-3">
          <div className="flex flex-col flex-grow space-y-1">
            <input
              type="text"
              className="bg-neutral-50 border-b border-slate-300 focus:outline-none"
              ref={inputElement}
              value={todo}
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
      <AddTodoButton
        className="fixed bottom-5 right-5 h-12 "
        onClick={() => {
          setShowTodoInput((prevShowTodoInput) => !prevShowTodoInput);
        }}
        type="button"
      />
    </>
  );
};

export default NewTodoItem;
