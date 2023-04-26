import styled from 'styled-components';

export const Tag = styled.div`
    width: max-content;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.colors.purple[0]};
    border-radius: 5px;
    font-size: 14px;
    box-shadow: ${({ theme }) => theme.shadows.sharp};
    font-family: ${({ theme }) => theme.font.secondary};
`;
