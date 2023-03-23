import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            <Link to={`/zadania/${id}`}>{content}</Link>
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