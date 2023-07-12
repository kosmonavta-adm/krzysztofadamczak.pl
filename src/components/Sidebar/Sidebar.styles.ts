import styled from 'styled-components';

import { TextLink } from '@/utils/styles/Typography.styles';

export const Wrapper = styled.aside`
    display: grid;
    align-content: flex-start;
    gap: 64px;
`;

export const CategoryList = styled.ul`
    display: grid;
    align-items: flex-start;
    gap: 6px;
`;

export const Category = styled.li`
    list-style: none;
    font-family: ${({ theme }) => theme.font.primary};
`;

export const SocialLink = styled(TextLink)`
    font-weight: 600;

    &::before {
        content: '🔥';
    }
`;

export const CategoryListLink = styled(TextLink)`
    font-weight: 400;
`;
