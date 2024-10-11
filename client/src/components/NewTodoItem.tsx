import AddTodoButton from "./AddTodoButton";
import { FC, useEffect, useRef } from "react";
import TodoEditor from "./TodoEditor";

interface Props {
  addTodo: (text: string) => void;
  showTodoEditor: boolean;
  setShowTodoEditor: (value: boolean) => void;
}

const NewTodoItem: FC<Props> = ({
  addTodo,
  showTodoEditor,
  setShowTodoEditor,
}) => {
  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [showTodoEditor]);

  return (
    <>
      <div className={showTodoEditor ? "block" : "hidden"}>
        <TodoEditor
          setShowTodoEditor={setShowTodoEditor}
          addTodo={addTodo}
          inputElement={inputElement}
        />
      </div>

      <AddTodoButton
        className="fixed bottom-5 right-5 h-12 "
        onClick={() => {
          setShowTodoEditor(!showTodoEditor);
        }}
        type="button"
        showTodoInput={showTodoEditor}
      />
    </>
  );
};

export default NewTodoItem;
