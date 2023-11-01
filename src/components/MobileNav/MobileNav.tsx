import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import MobileList from '@/components/MobileNav/parts/MobileList/MobileList';

import * as sMobileNav from '@/components/MobileNav/MobileNav.styles';

import { menuPaths } from '@/utils/constants';
import { useOverlay } from '../../providers/OverlayProvider';

const MobileNav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClientSide, setIsClientSide] = useState(false);
    const { setIsOverlayVisible } = useOverlay();
    const handleMobileMenu = () => {
        setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
        setIsOverlayVisible((prevIsOverlayVisible) => !prevIsOverlayVisible);
    };

    useEffect(() => {
        setIsClientSide(true);
    }, []);

    return (
        <>
            <sMobileNav.MobileMenuButton
                onClick={handleMobileMenu}
                tabIndex={0}
            >
                Menu
                <sMobileNav.NavHamburgerIcon $isMobileMenuOpen={isMobileMenuOpen} />
            </sMobileNav.MobileMenuButton>
            {isClientSide &&
                createPortal(
                    <MobileList
                        menuPaths={menuPaths}
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                        setIsOverlayVisible={setIsOverlayVisible}
                    />,
                    document.querySelector('#portal-root') as HTMLDivElement
                )}
        </>
    );
};

export default MobileNav;
