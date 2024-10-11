import { FC } from "react";

import { FaPlus, FaXmark } from "react-icons/fa6";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type: "button" | "submit";
  showTodoInput?: boolean;
}

const AddTodoButton: FC<Props> = ({
  onClick,
  className,
  type,
  showTodoInput,
}) => {
  return (
    <button
      className={`${className} ${
        showTodoInput ? "bg-red-600" : "bg-blue-600"
      }   text-white rounded-full aspect-square`}
      onClick={onClick}
      type={type}
    >
      {showTodoInput ? (
        <FaXmark className="mx-auto my-auto" />
      ) : (
        <FaPlus className="mx-auto my-auto" />
      )}
    </button>
  );
};

export default AddTodoButton;
