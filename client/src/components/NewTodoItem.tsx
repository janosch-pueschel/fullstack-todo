import AddTodoButton from "./AddTodoButton";
import { FC } from "react";
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
  return (
    <>
      <TodoEditor
        showTodoEditor={showTodoEditor}
        setShowTodoEditor={setShowTodoEditor}
        addTodo={addTodo}
      />
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
