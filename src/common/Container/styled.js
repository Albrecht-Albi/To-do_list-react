import styled from "styled-components";

export const Container = styled.main`
      max-width: 900px;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 20px;
    }
`;