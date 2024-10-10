import { FaCircleCheck, FaRegCircle, FaTrash } from "react-icons/fa6";
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
    <Card className="flex justify-between mx-2">
      <div onClick={() => toggleTodoDone(id)} className="text-lg mr-3">
        {done ? (
          <FaCircleCheck className="text-slate-500" size={20} />
        ) : (
          <FaRegCircle className="text-fuchsia-600" size={20} />
        )}
      </div>

      <p
        className={`${
          done && "line-through text-slate-500"
        } text-slate-800 mr-auto pr-5 leading-5`}
      >
        {text}
      </p>

      <div>
        <FaTrash className="text-slate-800" />
      </div>
    </Card>
  );
};

export default TodoItem;
