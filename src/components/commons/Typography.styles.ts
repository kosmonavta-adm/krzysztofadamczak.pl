import styled, { css } from 'styled-components';

const BaseFont = css`
    font-family: ${({ theme }) => theme.font};
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

export const Text = styled.p`
    text-align: justify;
    line-height: 2;
`;
