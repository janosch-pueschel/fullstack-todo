import { FaCircleCheck, FaRegCircle, FaTrash } from "react-icons/fa6";
import Card from "./Card";
import { FC, useState } from "react";
import TodoEditor from "./TodoEditor";

interface Props {
  id: number;
  text: string;
  done: boolean;
  toggleTodoDone: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
}

const TodoItem: FC<Props> = ({
  id,
  text,
  done,
  toggleTodoDone,
  updateTodo,
}) => {
  const [showUpdateEditor, setShowUpdateEditor] = useState(false);
  return (
    <>
      {showUpdateEditor ? (
        <TodoEditor
          text={text}
          updateTodo={updateTodo}
          setShowUpdateEditor={setShowUpdateEditor}
          id={id}
        />
      ) : (
        <Card className="flex justify-between items-start mx-2">
          <button onClick={() => toggleTodoDone(id)} className="text-lg mr-3">
            {done ? (
              <FaCircleCheck className="text-slate-500" size={20} />
            ) : (
              <FaRegCircle className="text-fuchsia-600" size={20} />
            )}
          </button>

          <p
            className={`${
              done && "line-through text-slate-500 hover:cursor-auto"
            } text-slate-800 flex-1 mr-auto pr-5 hover:cursor-pointer leading-5 h-full`}
            onClick={() => !done && setShowUpdateEditor(true)}
          >
            {text}
          </p>

          <div>
            <FaTrash className="text-slate-800" />
          </div>
        </Card>
      )}
    </>
  );
};

export default TodoItem;
