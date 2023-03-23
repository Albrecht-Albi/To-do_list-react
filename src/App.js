import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/inedex";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavlink } from "./styled";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <StyledNavlink to="/zadania">Zadania</StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="/autor">O autorze</StyledNavlink>
        </li>
      </ul>
      <Switch>
        <Route path="/Zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/Zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="zadania" />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);