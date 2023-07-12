import styled from 'styled-components';

import { Top } from '@/components/Container/Containers.styles';

import { breakpoints } from '@/utils/styles/breakpoints';

const { desktop } = breakpoints;

export const Wrapper = styled(Top)`
    height: 400px;

    @media ${desktop} {
        height: 900px;
    }
`;
export const Main = styled.div`
    display: none;
    flex-direction: column;
    gap: 64px;
    align-items: flex-start;
    padding: 32px 64px;
    backdrop-filter: blur(2px);
    border-radius: 5px;
    background-color: hsl(0deg 0% 100% / 3%);
    border: 1px solid #ffffff0a;
    width: max-content;

    @media ${desktop} {
        display: flex;
    }
`;
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
`;
