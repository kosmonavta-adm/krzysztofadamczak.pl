import { useRouter } from 'next/router';

import * as sNav from './Nav.styles';

import { menuPaths } from '@/utils/constants';
import { Position } from '@/utils/types';

const Nav = ({ position = 'nav' }: { position: Position }) => {
    const router = useRouter();
    const path = router.asPath;

    const isNotFooter = position !== 'footer';
    const filteredPaths =
        position === 'nav' ? menuPaths : menuPaths.filter(({ id }) => id !== 'strona-główna');

    const checkIfActivePage = (path: string, page: string) => path.includes(page);

    return (
        <sNav.Wrapper>
            {isNotFooter && (
                <sNav.Name
                    href="/"
                    $position={position}
                >
                    Krzysztof <br />
                    Adamczak
                </sNav.Name>
            )}
            <sNav.NavList $position={position}>
                {filteredPaths.map(({ title, id, url }) => (
                    <sNav.NavItem
                        $position={position}
                        key={id}
                    >
                        <sNav.NavLink
                            href={url}
                            $position={position}
                            $isActivePage={checkIfActivePage(path, id)}
                        >
                            {title}
                        </sNav.NavLink>
                    </sNav.NavItem>
                ))}
            </sNav.NavList>
        </sNav.Wrapper>
    );
};

export default Nav;
