import { breakpoints } from '@/utils/styles/breakpoints';
import styled, { css } from 'styled-components';

const { tablet } = breakpoints;

const baseText = css`
    font-family: ${({ theme }) => theme.font.secondary};
    line-height: 1.5;
    margin-top: 16px;
    text-align: center;
    font-size: 32px;

    @media ${tablet} {
        text-align: justify;
        font-size: 38px;
    }
`;

export const Text = styled.p`
    ${baseText}
`;

export const TextAccent = styled.span`
    ${baseText}
    color: ${({ theme }) => theme.colors.accent.dark[1]};
`;
