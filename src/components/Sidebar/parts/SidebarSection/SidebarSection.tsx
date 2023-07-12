import { ReactNode } from 'react';

import * as sSidebarSection from '@/components/Sidebar/parts/SidebarSection/SidebarSection.styles';

import * as sTypography from '@/utils/styles/Typography.styles';

export const SidebarSection = ({ children, title }: { children: ReactNode; title: string }) => {
    return (
        <sSidebarSection.Wrapper>
            <sTypography.H4 accent>{title}</sTypography.H4>
            {children}
        </sSidebarSection.Wrapper>
    );
};

export default SidebarSection;
