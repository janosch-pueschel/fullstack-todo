import { FC } from "react";
import { FaPlus } from "react-icons/fa6";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type: "button" | "submit";
}

const AddTodoButton: FC<Props> = ({ onClick, className, type }) => {
  return (
    <button
      className={`${className} bg-blue-600  text-white rounded-full aspect-square`}
      onClick={onClick}
      type={type}
    >
      <FaPlus className="mx-auto my-auto" />
    </button>
  );
};

export default AddTodoButton;
