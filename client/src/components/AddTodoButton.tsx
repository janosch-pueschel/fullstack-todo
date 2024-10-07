import { FaPlus } from "react-icons/fa6";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AddTodoButton({ onClick }: Props) {
  return (
    <button
      className="bg-blue-600 h-12 aspect-square text-white rounded-full fixed bottom-5 right-5"
      onClick={onClick}
    >
      <FaPlus className="mx-auto my-auto" />
    </button>
  );
}
