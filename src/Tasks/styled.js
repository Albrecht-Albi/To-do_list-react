import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto} ;
    align-items: center;  
    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;



export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0px;
    transition: 0.3s;
    
    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const ToggleDoneButton = styled(Button)`
        background: ${({ theme }) => theme.color.forestGreen};
`;

export const RemoveButton = styled(Button)`
    background: ${({ theme }) => theme.color.crimson};
    `;