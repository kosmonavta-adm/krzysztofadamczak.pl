import Link from 'next/link';
import styled, { css } from 'styled-components';

const BaseFont = css<{ accent?: boolean }>`
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ accent, theme }) => (accent ? theme.colors.accent.dark[1] : theme.colors.black)};
`;

const BaseHeading = css`
    font-family: ${({ theme }) => theme.font.secondary};
    color: ${({ theme }) => theme.colors.black};
    text-wrap: balance;
`;

export const ArticleH1 = styled.h1`
    ${BaseHeading}
    color: ${({ theme }) => theme.colors.black};
    font-size: 38px;
    font-weight: 400;
    line-height: 1.15;
    margin: 3rem 0 2rem 0;

    &:first-child {
        margin: 0 0 2rem 0;
    }

    &:last-child {
        margin: 2rem 0 0 0;
    }
`;
export const ArticleH2 = styled.h2`
    ${BaseHeading}
    color: ${({ theme }) => theme.colors.black};
    font-size: 28px;
    font-weight: 500;
    line-height: 1.3;
    margin: 1.5rem 0 1rem 0;

    &:first-child {
        margin: 0 0 1.5rem 0;
    }

    &:last-child {
        margin: 1.5rem 0 0 0;
    }
`;
export const ArticleH3 = styled.h3`
    ${BaseHeading}
    color: ${({ theme }) => theme.colors.black};
    font-size: 22px;
    font-weight: 600;
    line-height: 1.5;
    margin: 0.75rem 0 0.5rem 0;

    &:first-child {
        margin: 0 0 0.75rem 0;
    }

    &:last-child {
        margin: 0.75rem 0 0 0;
    }
`;

export const H1 = styled.h1<{ $onDark?: boolean }>`
    ${BaseFont}
    color: ${({ theme, $onDark }) => ($onDark ? theme.colors.white : null)};
    font-size: clamp(3rem, calc(2.82rem + 0.9vw), 3.75rem);
    font-weight: 500;
`;

export const H2 = styled.h2<{ $onDark?: boolean }>`
    ${BaseFont}
    color: ${({ theme, $onDark }) => ($onDark ? theme.colors.white : null)};
    font-size: clamp(1.75rem, calc(1.69rem + 0.3vw), 2rem);
    font-weight: 300;
`;

export const H3 = styled.h3`
    ${BaseFont}
    font-size: 24px;
    font-weight: 400;
`;

export const H4 = styled.h4`
    ${BaseFont}
    font-size: 18px;
    font-weight: 800;
`;

export const H5 = styled.h5`
    ${BaseFont}
    font-size: 18px;
    font-weight: 500;
`;

export const Text = styled.p`
    font-family: ${({ theme }) => theme.font.primary};
    text-align: justify;
    line-height: 2;
    font-size: 16px;
    margin-bottom: 1.5rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const TextLink = styled(Link)<{ $small?: boolean }>`
    font-family: ${({ theme }) => theme.font.primary};
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    transition: color 0.2s ease-in-out;
    align-items: center;
    line-height: 1;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.accent.dark[0]};
    }
`;

export const TextLinkBlank = styled(Link)`
    font-weight: inherit;
    color: inherit;
    text-decoration: none;
    font-size: inherit;
`;

const BaseList = css`
    padding: 1rem 0 1rem 2rem;
    display: grid;
    font-family: ${({ theme }) => theme.font.primary};
`;

export const OrderedList = styled.ol`
    ${BaseList}
`;
export const UnorderedList = styled.ul`
    ${BaseList}
`;

export const ListItem = styled.li`
    line-height: 2;
    color: ${({ theme }) => theme.colors.black};
`;
