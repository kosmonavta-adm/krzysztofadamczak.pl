import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 128px;
    padding: 64px 0;
`;

export const Base = styled.section`
    display: flex;
    flex-direction: column;
    width: clamp(65vw, 1200px, 90vw);
    margin: auto;
`;
