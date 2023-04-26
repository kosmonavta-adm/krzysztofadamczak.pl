import styled from 'styled-components';

import { breakpoints } from '@/utils/breakpoints';

const { tablet } = breakpoints;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;

    @media ${tablet} {
        gap: 128px;
        flex-direction: row;
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;
export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const TagWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 120ch;
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media ${tablet} {
        margin: 32px auto;
        min-width: 320px;
        flex-grow: 1;
        box-shadow: ${({ theme }) => theme.shadows.subtle[0]};
        border: 1px solid ${({ theme }) => theme.colors.purple[1]};
        background-color: ${({ theme }) => theme.colors.purple[0]};
        padding: 16px 32px;
        border-radius: 5px;
        height: min-content;
    }
`;
