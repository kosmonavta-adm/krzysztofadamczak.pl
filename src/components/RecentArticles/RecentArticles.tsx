import Sidebar from '@/components/Sidebar/Sidebar';
import CategoriesSection from '@/components/Sidebar/parts/CategoriesSection/CategoriesSection';
import WorthSeeingSection from '@/components/Sidebar/parts/WorthSeeingSection/WorthSeeingSection';

import * as sRecentArticles from '@/components/RecentArticles/RecentArticles.styles';
import * as sContainers from '@/components/Container/Containers.styles';
import * as sTypography from '@/utils/styles/Typography.styles';

import { getArticlesData } from '@/utils/helpers';
import { CategoryWithUrl, PostMetadata } from '@/utils/types';

export const RecentArticles = ({
    data,
    categories,
}: {
    data: PostMetadata[];
    categories: CategoryWithUrl[];
}) => {
    return (
        <sContainers.Base>
            <sRecentArticles.Wrapper>
                <sContainers.Articles>
                    <sTypography.H3 accent>Najnowsze wpisy</sTypography.H3>
                    <sRecentArticles.List>{getArticlesData(data)}</sRecentArticles.List>
                </sContainers.Articles>
                <Sidebar>
                    <CategoriesSection categories={categories} />
                    <WorthSeeingSection />
                </Sidebar>
            </sRecentArticles.Wrapper>
        </sContainers.Base>
    );
};

export default RecentArticles;
