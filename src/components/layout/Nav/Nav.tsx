import * as Styled from './Nav.styles';

const menuPaths = [
    {
        title: 'O mnie',
        id: 'about',
    },
    {
        title: 'Projekty',
        id: 'projects',
    },
    {
        title: 'Kontakt',
        id: 'contact',
    },
];

export const Nav = ({
    $small = false,
    $onDark = false,
}: {
    $small?: boolean;
    $onDark?: boolean;
}) => {
    const handleScroll = (to: string) => () => {
        //TODO: I'm not sure how to do this with refs and typescript, temporary solution.
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <Styled.Nav>
            <Styled.NavList $small={$small}>
                {menuPaths.map(({ title, id }) => (
                    <Styled.NavItem
                        $small={$small}
                        key={id}
                        onClick={handleScroll(id)}
                        $onDark={$onDark}
                    >
                        {title}
                    </Styled.NavItem>
                ))}
            </Styled.NavList>
        </Styled.Nav>
    );
};
