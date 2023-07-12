import styled from 'styled-components';
import Link from 'next/link';

import { Position } from '@/utils/types';

export const Wrapper = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 23px;
`;

export const Name = styled(Link)<{ $position: Position }>`
    font-family: ${({ theme }) => theme.font.secondary};
    text-decoration: none;
    font-size: 24px;
    color: ${({ theme, $position }) =>
        $position === 'nav' ? theme.colors.grey[0] : theme.colors.white};
    margin: 0 auto 0 0;
    font-weight: 800;

    br {
        display: block;
    }

    @media (width >= 800px) {
        br {
            display: none;
        }
    }
    ${({ $position }) =>
        $position !== 'nav' &&
        `@media (width >= 1280px) {
            display: none;
        }`}
`;

export const NavList = styled.ul<{ $position: Position }>`
    display: none;
    gap: ${({ $position }) => ($position === 'footer' ? '48px' : '96px')};

    @media (width >= 1024px) {
        display: flex;
    }
`;

export const NavItem = styled.li<{ $position: Position }>`
    display: flex;
`;

export const NavLink = styled(Link)<{ $position: Position; $isActivePage: boolean }>`
    font-size: ${({ $position }) => ($position === 'footer' ? '14px' : '18px')};
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme, $position, $isActivePage }) => {
        if ($position === 'hero') return theme.colors.white;
        else if (!$isActivePage) return theme.colors.black;
        else return theme.colors.error[0];
    }};
    font-weight: 800;
    transition: all 0.2s ease;
    padding: 4px 8px;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
    z-index: 1;

    &:hover {
        color: ${({ theme, $position, $isActivePage }) => {
            if ($position === 'hero') return theme.colors.white;
            else if (!$isActivePage) return theme.colors.accent.dark[1];
            else return theme.colors.error[0];
        }};
    }

    ::before {
        content: '';
        width: 100%;
        inset: 0;
        margin: auto;
        position: absolute;
        translate: ${({ $isActivePage }) => ($isActivePage ? '0 65%' : '-101% 65%')};
        background-color: ${({ theme, $isActivePage }) =>
            $isActivePage ? theme.colors.error[0] : theme.colors.accent.dark[1]};
        transition: all 0.2s ease;
        z-index: -1;
        opacity: 0.3;
    }

    &:hover::before {
        translate: 0% 65%;
    }
`;

export const NavMobileMenu = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
`;
