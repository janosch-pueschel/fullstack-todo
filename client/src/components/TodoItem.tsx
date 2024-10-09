import { FaCircleCheck, FaRegCircle, FaXmark } from "react-icons/fa6";
import Card from "./Card";
import { FC } from "react";

interface Props {
  id: number;
  text: string;
  done: boolean;
  toggleTodoDone: (id: number) => void;
}

const TodoItem: FC<Props> = ({ id, text, done, toggleTodoDone }) => {
  return (
    <Card className="flex justify-between items-center">
      <div className="flex items-center space-x-5">
        <span onClick={() => toggleTodoDone(id)} className=" text-lg">
          {done ? (
            <FaCircleCheck className="text-slate-300" />
          ) : (
            <FaRegCircle className="text-fuchsia-600" />
          )}
        </span>

        <p
          className={`${done && "line-through"} w-40 truncate overflow-hidden`}
        >
          {text}
        </p>
      </div>

      <FaXmark className="text-slate-500" />
    </Card>
  );
};

export default TodoItem;
