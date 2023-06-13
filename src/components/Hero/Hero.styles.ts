import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 128px;
`;
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: flex-start;
    padding: 32px 64px;
    transform: translateX(-64px);
    backdrop-filter: blur(2px);
    border-radius: 5px;
    background-color: hsl(0deg 0% 100% / 3%);
    border: 1px solid #ffffff0a;
    width: max-content;
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
