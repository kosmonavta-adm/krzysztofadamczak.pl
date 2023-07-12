import styled from 'styled-components';

const Tag = styled.div`
    width: max-content;
    padding: 16px;
    border: 1px solid #f4f6ff;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: ${({ theme }) => `0.2px 0.5px 0.8px hsl(${theme.colors.shadow[1]} / 0.03),
        0.7px 1.5px 2.4px -0.1px hsl(${theme.colors.shadow[1]} / 0.09),
        1.2px 2.6px 4.1px -0.2px hsl(${theme.colors.shadow[1]} / 0.14),
        2.1px 4.4px 6.9px -0.4px hsl(${theme.colors.shadow[1]} / 0.2),
        3.6px 7.6px 12px -0.5px hsl(${theme.colors.shadow[1]} / 0.25)`};
    font-family: ${({ theme }) => theme.font.secondary};
`;

export default Tag;
