import styled from 'styled-components';

export const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgb(10 0 143 / 10%);
    transition: all 0.3s cubic-bezier(0, 0, 0.25, 1);

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgb(10 0 143 / 5%);
    }
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 300px;
    background-color: #79b1ff;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.font.secondary};
`;

export const Description = styled.p`
    text-align: justify;
    font-family: ${({ theme }) => theme.font.primary};
    line-height: 1.5;
`;

export const Tags = styled.div`
    display: flex;
    margin: 16px 0 32px 0;
    gap: 32px;
`;

export const Tag = styled.div`
    font-weight: 500;
    font-size: 14px;
    font-family: ${({ theme }) => theme.font.secondary};
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
`;
