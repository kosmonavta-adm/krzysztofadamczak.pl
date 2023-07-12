import Link from 'next/link';
import styled, { css } from 'styled-components';

const activePage = css`
    background-color: ${({ theme }) => theme.colors.accent.dark[1]};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    transition: none;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
`;

export const PageButton = styled(Link)<{ $page: boolean }>`
    font-size: 20px;
    padding: 8px 12px;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.black};
    transition: color ${({ theme }) => theme.animation};
    ${({ $page }) => $page && activePage}

    &:hover {
        color: ${({ theme, $page }) => !$page && theme.colors.accent.dark[1]};
    }
`;
