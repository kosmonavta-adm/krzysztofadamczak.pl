import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    inset: 0;
    margin: auto;
    width: 80vw;
    aspect-ratio: 16/9;
    cursor: pointer;

    & img {
        object-fit: none;
    }

    &:before {
        content: '';
        width: 100dvw;
        height: 100dvh;
        position: fixed;
        background-color: #000c;
        inset: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    cursor: pointer;
`;
