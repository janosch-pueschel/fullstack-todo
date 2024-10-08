import { FaPlus } from "react-icons/fa6";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function AddTodoButton({ onClick, className }: Props) {
  return (
    <button
      className={`${className} bg-blue-600  text-white rounded-full aspect-square`}
      onClick={onClick}
    >
      <FaPlus className="mx-auto my-auto" />
    </button>
  );
}
