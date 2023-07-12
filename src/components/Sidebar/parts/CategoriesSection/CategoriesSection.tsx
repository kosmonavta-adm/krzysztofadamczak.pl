import SidebarSection from '@/components/Sidebar/parts/SidebarSection/SidebarSection';

import { CategoryWithUrl } from '@/utils/types';

import * as sSidebar from '@/components/Sidebar/Sidebar.styles';

export const CategoriesSection = ({ categories }: { categories: CategoryWithUrl[] }) => {
    const getCategories = (categories: CategoryWithUrl[]) =>
        categories.map(({ category, url, id }) => (
            <sSidebar.Category key={id}>
                <sSidebar.CategoryListLink href={url}>{category}</sSidebar.CategoryListLink>
            </sSidebar.Category>
        ));
    return (
        <SidebarSection title="Kategorie">
            <sSidebar.CategoryList>{getCategories(categories)}</sSidebar.CategoryList>
        </SidebarSection>
    );
};

export default CategoriesSection;
