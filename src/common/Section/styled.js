import styled from "styled-components";

export const Wrapper = styled.section`
    margin-bottom: 10px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding-bottom: 20px;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
    padding:20px;
`;

export const Body = styled.div`
    padding: 20px;
`;