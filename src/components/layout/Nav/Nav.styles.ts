import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;
export const NavList = styled.ul<{ $small?: boolean }>`
    display: flex;
    gap: ${({ $small }) => ($small ? '48px' : '96px')};
`;
export const NavItem = styled.li<{ $small?: boolean; $onDark?: boolean }>`
    font-size: ${({ $small }) => ($small ? '14px' : '18px')};
    font-weight: 400;
    display: block;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.secondary};
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-decoration-style: double;
    text-decoration-color: transparent;
    color: ${({ theme, $onDark }) => ($onDark ? theme.colors.white : theme.colors.grey[0])};

    &:hover {
        text-decoration-color: ${({ theme }) => theme.colors.grey[1]};
    }
`;
