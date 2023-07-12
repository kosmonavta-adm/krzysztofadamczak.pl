import styled from 'styled-components';

import { breakpoints } from '@/utils/styles/breakpoints';

const { mobile } = breakpoints;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Projects = styled.div`
    display: grid;
    width: 100%;
    gap: 75px;

    @media ${mobile} {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
`;
