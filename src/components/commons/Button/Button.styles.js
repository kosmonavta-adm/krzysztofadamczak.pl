import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.purple[0]};
    color: ${({ theme }) => theme.colors.white};
    padding: 12px 24px;
    border-radius: 5px;
    transition: 0.3s cubic-bezier(0, 0, 0.25, 1);
    transition-property: background-color, transform, box-shadow;
    box-shadow: 0 5px 10px rgb(10 0 143 / 40%);
    font-size: 16px;
    font-family: ${({ theme }) => theme.font};
    :hover {
        background-color: ${({ theme }) => theme.colors.purple[1]};
        transform: scale(0.98);
        box-shadow: 0 2px 9px rgb(10 0 143 / 50%);
    }
`;
