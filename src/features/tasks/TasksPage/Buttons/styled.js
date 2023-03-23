import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    `;

export const Button = styled.button`
        background: transparent;
        color: ${({ theme }) => theme.color.teal};
        border: none;
        padding: 20px;
        transition: filter 0.3;
        
        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-basis: 100%;
            padding: 10px;
        }
        
        &:hover {
            filter: brightness(110%);
        }
        
        &:active {
            filter: brightness(120%);
        }

        &:disabled {
            color: ${({ theme }) => theme.color.silver};
        }
`;