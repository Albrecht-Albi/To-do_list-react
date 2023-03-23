import { useHistory, useLocation } from "react-router-dom";
import { Wrapper } from "../Search/styled";
import searchQueryParamName from "../searchQueryParamName"

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};