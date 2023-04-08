import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    font-size: clamp(3rem, calc(2.82rem + 0.9vw), 3.75rem);
    font-weight: 500;
    margin-bottom: clamp(2.25rem, calc(2.03rem + 1.12vw), 3.19rem);
    line-height: 1;
`;

export const H2 = styled.h2`
    font-size: clamp(1.75rem, calc(1.69rem + 0.3vw), 2rem);
    font-weight: 300;
    line-height: 1;
`;
