import styled from 'styled-components';

import { breakpoints } from '@/utils/breakpoints';

const { tablet } = breakpoints;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 64px;

    @media ${tablet} {
        gap: 120px;
        flex-direction: row;
    }
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 72px;
`;
export const Tech = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
export const TagWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 120ch;
`;
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fbfbfb;
    border-radius: 5px;
    box-shadow: 6px 6px 24px hsl(243deg 100% 64% / 10%);
    border: 1px solid hsl(0 0% 96% / 1);
    flex-grow: 1;
    padding: 24px 36px;
    height: min-content;
    min-width: auto;
    margin: 0;
    width: fit-content;

    @media ${tablet} {
        margin: 32px auto;
        min-width: 320px;
    }
`;
export const List = styled.ul`
    padding: 0;
`;
export const Item = styled.li`
    padding: 0;
    list-style-type: '>>';
    list-style-position: inside;
    font-family: ${({ theme }) => theme.font.secondary};
`;
