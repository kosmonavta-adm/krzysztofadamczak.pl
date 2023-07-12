import styled from 'styled-components';

export const Overlay = styled.div<{ $isOverlayVisible: boolean }>`
    display: flex;
    inset: 0;
    backdrop-filter: blur(5px);
    background-color: hsl(0deg 0% 100% / 20%);
    position: fixed;
    z-index: 5;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ $isOverlayVisible }) => ($isOverlayVisible ? 1 : 0)};
    pointer-events: ${({ $isOverlayVisible }) => ($isOverlayVisible ? 'all' : 'none')};

    @media (width >= 1024px) {
        display: none;
    }
`;
