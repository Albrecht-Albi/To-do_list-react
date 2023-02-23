import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
  toggleHideDone,
  setAllDone,
  selectAreTaskEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const areTaskEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone)

  const dispatch = useDispatch();
  return (
    <Wrapper>
      {!areTaskEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;