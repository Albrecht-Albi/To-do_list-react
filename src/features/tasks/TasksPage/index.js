import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import {Container} from "../../../common/Container/styled";
import TasksList from "../TasksPage/TaskList";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";

const TasksPage = () => {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Zadania"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;