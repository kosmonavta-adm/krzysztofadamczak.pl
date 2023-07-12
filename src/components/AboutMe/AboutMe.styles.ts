import styled from 'styled-components';

import { breakpoints } from '@/utils/styles/breakpoints';

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
`;
