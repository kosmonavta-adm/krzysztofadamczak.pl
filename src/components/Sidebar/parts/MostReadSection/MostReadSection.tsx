import SidebarSection from '@/components/Sidebar/parts/SidebarSection/SidebarSection';

import * as sSidebar from '@/components/Sidebar/Sidebar.styles';

export const MostReadSection = () => {
    return (
        <SidebarSection title="Najczęściej czytane">
            <sSidebar.CategoryList>
                <sSidebar.Category>Animated Pride Flags</sSidebar.Category>
                <sSidebar.Category>The End of Front-End Development</sSidebar.Category>
                <sSidebar.Category>Common Beginner Mistakes with React</sSidebar.Category>
            </sSidebar.CategoryList>
        </SidebarSection>
    );
};

export default MostReadSection;
