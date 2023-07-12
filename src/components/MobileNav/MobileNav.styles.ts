import styled from 'styled-components';

import Button from '@/components/Button/Button.styles';

export const NavHamburgerIcon = styled.div<{ $isMobileMenuOpen: boolean }>`
    &:before,
    &:after {
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.accent.dark[1]};
        content: '';
        display: block;
        margin: 6px 0;
        height: 2px;
        width: 25px;
        transition: all ${({ theme }) => theme.animation};
    }
    &:before {
        ${({ $isMobileMenuOpen }) =>
            $isMobileMenuOpen && 'transform: translateY(calc(50% + 3px)) rotate(-225deg);'}
    }
    &:after {
        ${({ $isMobileMenuOpen }) =>
            $isMobileMenuOpen && 'transform: translateY(calc(-50% - 3px)) rotate(225deg);'}
    }
`;

export const MobileMenuButton = styled(Button)`
    position: fixed;
    bottom: 32px;
    right: 32px;
    z-index: 10;
    left: 0;
    right: 0;
    margin: auto;
    width: min-content;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #5b7fff21;
    box-shadow: ${({ theme }) => `0.2px 0.5px 0.8px hsl(${theme.colors.shadow[1]} / 0.03),
        0.7px 1.5px 2.4px -0.1px hsl(${theme.colors.shadow[1]} / 0.09),
        1.2px 2.6px 4.1px -0.2px hsl(${theme.colors.shadow[1]} / 0.14),
        2.1px 4.4px 6.9px -0.4px hsl(${theme.colors.shadow[1]} / 0.2),
        3.6px 7.6px 12px -0.5px hsl(${theme.colors.shadow[1]} / 0.25)`};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;

    &:hover {
        background-color: hsl(243deg 100% 98%);
        box-shadow: ${({ theme }) => `0.2px 0.6px 0.9px hsl(${theme.colors.shadow[0]} / 0),
            0.4px 1px 1.6px hsl(${theme.colors.shadow[0]} / 0.11),
            0.7px 1.8px 2.9px hsl(${theme.colors.shadow[0]} / 0.23)`};
    }

    @media (width >= 1024px) {
        display: none;
    }
`;
