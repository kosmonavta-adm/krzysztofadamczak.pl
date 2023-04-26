import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;
export const NavList = styled.ul`
    display: flex;
    gap: 100px;
`;
export const NavItem = styled.li`
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    display: block;
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.secondary};
`;
