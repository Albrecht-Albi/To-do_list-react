import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch()

  return (
    <List>
      {tasks.map(({ id, content, done }) => (
        <Item
          key={id}
          hidden={done && hideDone}
        >
          <ToggleDoneButton
            toggleDone
            onClick={
              () => dispatch(toggleTaskDone(id))}
          >
            {done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={done}>
            {content}
          </Content>
          <RemoveButton
            remove
            onClick={
              () => dispatch(removeTask(id))}
          >
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;