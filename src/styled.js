import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active"

export const StyledNavlink = styled(NavLink).attrs(() => ({
  activeClassName: activeClassName,
}))`
&.${activeClassName} {
 color: red;
}
`;