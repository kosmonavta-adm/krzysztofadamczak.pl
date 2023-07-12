import NextLink from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.ul<{ $isMobileMenuOpen: boolean }>`
    display: flex;
    position: fixed;
    bottom: 100px;
    width: 50%;
    align-items: center;
    flex-direction: column;
    /* box-shadow: 0 2px 5px rgb(80 72 255 / 20%); */
    box-shadow: ${({ theme }) => `0.2px 0.5px 0.8px hsl(${theme.colors.shadow[0]} / 0.03),
        0.7px 1.5px 2.4px -0.1px hsl(${theme.colors.shadow[0]} / 0.09),
        1.2px 2.6px 4.1px -0.2px hsl(${theme.colors.shadow[0]} / 0.14),
        2.1px 4.4px 6.9px -0.4px hsl(${theme.colors.shadow[0]} / 0.2),
        3.6px 7.6px 12px -0.5px hsl(${theme.colors.shadow[0]} / 0.25)`};
    margin: auto;
    left: 0;
    right: 0;
    padding: 16px 0;
    border-radius: 5px;
    background-color: hsl(0deg 0% 100%);
    z-index: 10;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? 1 : 0)};
    pointer-events: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? 'all' : 'none')};

    @media (width >= 1024px) {
        display: none;
    }
`;

export const Item = styled.li`
    list-style: none;
`;

export const Link = styled(NextLink)`
    display: flex;
    font-family: ${({ theme }) => theme.font.secondary};
    padding: 32px;
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    transition: color ${({ theme }) => theme.animation};

    &:hover {
        color: ${({ theme }) => theme.colors.accent.dark[1]};
    }
`;
