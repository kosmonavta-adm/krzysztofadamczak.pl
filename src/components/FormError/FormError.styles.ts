import styled from 'styled-components';

export const Text = styled.p`
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.error};
`;
