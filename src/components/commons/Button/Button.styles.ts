import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.purple[2]};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 32px;
    border-radius: 5px;
    transition: 0.3s cubic-bezier(0, 0, 0.25, 1);
    transition-property: background-color, transform, box-shadow;
    box-shadow: ${({ theme }) => theme.shadows.intense[0]};
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.secondary};
    :hover {
        background-color: ${({ theme }) => theme.colors.purple[3]};
        transform: scale(0.98);
        box-shadow: ${({ theme }) => theme.shadows.intense[1]};
    }
`;
