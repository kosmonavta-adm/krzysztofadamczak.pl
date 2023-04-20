import styled from 'styled-components';

export const Tag = styled.div`
    width: max-content;
    padding: 12px 18px;
    border: 1px solid #5048ff0a;
    border-radius: 5px;
    box-shadow: 0 2px 5px #5048ff1f;
    font-family: ${({ theme }) => theme.font.primary};
`;
