import styled from 'styled-components';

import { breakpoints } from '@/utils/styles/breakpoints';

const { tablet } = breakpoints;

export const Wrapper = styled.div`
    display: flex;
    gap: 32px 128px;
    flex-direction: column;

    @media ${tablet} {
        flex-direction: row;
    }
`;

export const List = styled.div`
    display: grid;
    gap: 64px;
    max-width: 100%;

    @media ${tablet} {
        max-width: 80ch;
    }
`;
