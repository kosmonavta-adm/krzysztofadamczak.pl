import Link from 'next/link';
import styled, { css } from 'styled-components';

const BaseFont = css`
    font-family: ${({ theme }) => theme.font.secondary};
`;

export const H1 = styled.h1`
    ${BaseFont}
    font-size: clamp(3rem, calc(2.82rem + 0.9vw), 3.75rem);
    font-weight: 500;
`;

export const H2 = styled.h2`
    ${BaseFont}
    font-size: clamp(1.75rem, calc(1.69rem + 0.3vw), 2rem);
    font-weight: 300;
`;

export const H3 = styled.h3`
    ${BaseFont}
    font-size: 32px;
    font-weight: 400;
`;

export const H4 = styled.h4`
    ${BaseFont}
    font-size: 20px;
    font-weight: 500;
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
`;

export const TextLink = styled(Link)<{ $small?: boolean }>`
    ${BaseFont}
    display: flex;
    gap: 8px;
    font-size: ${({ $small }) => ($small ? '14px' : '16px')};
    color: ${({ theme }) => theme.colors.blue[1]};
    font-weight: 700;
    transition: color 0.2s ease-in-out;
    align-items: center;
    line-height: 1;

    &:hover {
        color: ${({ theme }) => theme.colors.blue[0]};
    }
`;
