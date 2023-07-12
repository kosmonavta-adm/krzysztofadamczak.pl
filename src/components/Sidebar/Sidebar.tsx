import { ReactNode } from 'react';

import * as sSidebar from '@/components/Sidebar/Sidebar.styles';

const Sidebar = ({ children }: { children: ReactNode }) => {
    return <sSidebar.Wrapper>{children}</sSidebar.Wrapper>;
};

export default Sidebar;
