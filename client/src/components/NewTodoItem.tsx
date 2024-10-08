import { FaRegCircle } from "react-icons/fa6";
import Card from "./Card";
import AddTodoButton from "./AddTodoButton";
import { useEffect, useRef, useState } from "react";

export default function NewTodoItem() {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [showTodoInput]);

  const storeTodo = () => {
    setShowTodoInput((prevShowTodoInput) => !prevShowTodoInput);
    console.log("Todo stored...");
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
        <div className="flex flex-col flex-grow space-y-1">
          <input
            type="text"
            className="bg-neutral-50 border-b border-slate-300 focus:outline-none"
            ref={inputElement}
          />
          <span className="text-xs text-slate-400">Add Todo Item</span>
        </div>
        <AddTodoButton onClick={storeTodo} className="p-1" />
      </Card>
      <AddTodoButton
        className="fixed bottom-5 right-5 h-12 "
        onClick={() => {
          setShowTodoInput((prevShowTodoInput) => !prevShowTodoInput);
        }}
      />
    </>
  );
}
