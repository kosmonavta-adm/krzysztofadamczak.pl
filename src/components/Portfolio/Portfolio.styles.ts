import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 75px;
`;
