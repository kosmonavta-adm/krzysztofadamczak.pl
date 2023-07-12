import styled from 'styled-components';

import { TextLink } from '@/utils/styles/Typography.styles';

export const Wrapper = styled.article`
    display: grid;
    gap: 16px;
`;

export const Title = styled.h4`
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 20px;
    font-weight: 600;
`;

export const ReadMore = styled(TextLink)`
    line-height: 1;
    font-weight: 700;
    font-size: 0.875rem;
    justify-self: end;
    width: fit-content;
`;
