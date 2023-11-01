import styled from 'styled-components';

export const ShortcutButton = styled.span`
    font-size: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 2px 4px;
    font-weight: 600;
    font-family: arial;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #424242;
    background-color: #f5f5f5;
    font-family: ${({ theme }) => theme.font.code};
`;
