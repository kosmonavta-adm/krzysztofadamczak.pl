import styled from 'styled-components';

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: ${({ theme }) => `0.2px 0.5px 0.8px hsl(${theme.colors.shadow[0]} / 0.03),
        0.7px 1.5px 2.4px -0.1px hsl(${theme.colors.shadow[0]} / 0.09),
        1.2px 2.6px 4.1px -0.2px hsl(${theme.colors.shadow[0]} / 0.14),
        2.1px 4.4px 6.9px -0.4px hsl(${theme.colors.shadow[0]} / 0.2),
        3.6px 7.6px 12px -0.5px hsl(${theme.colors.shadow[0]} / 0.25)`};
    transition: all 0.3s cubic-bezier(0, 0, 0.25, 1);

    &:hover {
        transform: scale(1.05);
        box-shadow: ${({ theme }) => `0.2px 0.6px 0.9px hsl(${theme.colors.shadow[1]} / 0),
            1.2px 2.9px 4.7px hsl(${theme.colors.shadow[1]} / 0.03),
            1.9px 4.9px 7.9px hsl(${theme.colors.shadow[1]} / 0.05),
            2.7px 6.8px 11px hsl(${theme.colors.shadow[1]} / 0.08),
            3.5px 8.9px 14.3px hsl(${theme.colors.shadow[1]} / 0.11),
            4.6px 11.4px 18.4px hsl(${theme.colors.shadow[1]} / 0.13),
            5.8px 14.7px 23.7px hsl(${theme.colors.shadow[1]} / 0.16),
            7.5px 18.8px 30.4px hsl(${theme.colors.shadow[1]} / 0.19),
            9.6px 24.2px 39.1px hsl(${theme.colors.shadow[1]} / 0.21),
            12.3px 31px 50px hsl(${theme.colors.shadow[1]} / 0.24)`};
    }
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.accent.dark[1]};
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
`;

export const Tags = styled.div`
    display: flex;
    margin: 16px 0 32px 0;
    gap: 32px;
`;

export const Tag = styled.div`
    font-weight: 500;
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.font.secondary};
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
`;
