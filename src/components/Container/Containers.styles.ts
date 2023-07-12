import styled from 'styled-components';

import { breakpoints } from '@/utils/styles/breakpoints';

const { tablet } = breakpoints;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 128px;
    padding: 64px 0 104px 0;

    @media ${tablet} {
        padding: 64px 0;
    }
`;

export const Base = styled.section`
    display: flex;
    flex-direction: column;
    width: min(100%, 1050px);
    margin: auto;
    padding: 0 32px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 128px;
    width: min(100%, 1600px);
    margin: auto;
    padding: 32px;
    padding-bottom: 0;

    @media ${tablet} {
        padding: 64px;
    }
`;

export const WrapperWithSidebar = styled.div`
    display: flex;
    gap: 32px 128px;
    flex-direction: column;

    @media ${tablet} {
        flex-direction: row;
    }
`;

export const Articles = styled.div`
    display: grid;
    gap: 32px;
`;

export const ArticlesList = styled.div`
    display: grid;
    gap: 64px;
    max-width: 100%;

    @media ${tablet} {
        max-width: 80ch;
    }
`;

export const Text = styled.article`
    width: 100%;
    max-width: 100ch;
`;

export const TwoColumns = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 64px;

    @media ${tablet} {
        grid-template-columns: 100fr 80fr;
        gap: 128px;
    }
`;
