import SidebarSection from '@/components/Sidebar/parts/SidebarSection/SidebarSection';

import * as sSidebar from '@/components/Sidebar/Sidebar.styles';

export const WorthSeeingSection = () => {
    return (
        <SidebarSection title="Warto zajrzeć">
            <sSidebar.SocialLink href="https://github.com/kosmonavta-adm">
                GitHub
            </sSidebar.SocialLink>
        </SidebarSection>
    );
};

export default WorthSeeingSection;
