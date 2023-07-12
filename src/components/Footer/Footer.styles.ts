import styled from 'styled-components';

export const Wrapper = styled.footer`
    display: flex;
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 14px;
    justify-content: space-between;
`;
