import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 16px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.accent.dark[1]};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px 32px;
    border-radius: 5px;
    transition: 0.2s cubic-bezier(0, 0, 0.25, 1);
    transition-property: background-color, transform;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.secondary};
    user-select: none;
    justify-content: center;

    :hover {
        background-color: ${({ theme }) => theme.colors.accent.dark[0]};
        transform: scale(0.98);
    }
`;

export default Button;
