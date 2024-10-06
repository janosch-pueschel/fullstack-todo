import { FaCircleCheck, FaRegCircle, FaXmark } from "react-icons/fa6";
import Card from "./Card";
import { useState } from "react";

export default function TodoItem() {
  const [todoDone, setTodoDone] = useState(false);

  const toggleTodoDone = () => {
    setTodoDone((prevTodoDone) => !prevTodoDone);
  };

  return (
    <>
      <Card className="flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <span onClick={toggleTodoDone} className=" text-lg">
            {todoDone ? (
              <FaCircleCheck className="text-slate-300" />
            ) : (
              <FaRegCircle className="text-fuchsia-600" />
            )}
          </span>

          <p
            className={`${
              todoDone && "line-through"
            } w-40 truncate overflow-hidden`}
          >
            This is a todo item This is a todo item This is a todo item
          </p>
        </div>

        <FaXmark className="text-slate-500" />
      </Card>
    </>
  );
}
