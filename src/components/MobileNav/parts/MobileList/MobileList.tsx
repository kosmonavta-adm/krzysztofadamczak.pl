import * as sMobileList from '@/components/MobileNav/parts/MobileList/MobileList.styles';

interface MenuPath {
    title: string;
    id: string;
    url: string;
}

export const MobileList = ({
    menuPaths,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsOverlayVisible,
}: {
    menuPaths: MenuPath[];
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (value: boolean) => void;
    setIsOverlayVisible: (value: boolean) => void;
}) => {
    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
        setIsOverlayVisible(false);
    };
    return (
        <sMobileList.Wrapper $isMobileMenuOpen={isMobileMenuOpen}>
            {menuPaths.map(({ title, id, url }) => (
                <sMobileList.Item key={id}>
                    <sMobileList.Link
                        href={url}
                        onClick={handleMobileMenuClose}
                    >
                        {title}
                    </sMobileList.Link>
                </sMobileList.Item>
            ))}
        </sMobileList.Wrapper>
    );
};

export default MobileList;
