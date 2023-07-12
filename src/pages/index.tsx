import Hero from '@/components/Hero/Hero';
import AboutMe from '@/components/AboutMe/AboutMe';
import Portfolio from '@/components/Portfolio/Portfolio';
import Footer from '@/components/Footer/Footer';
import RecentArticles from '@/components/RecentArticles/RecentArticles';
import Overlay from '@/components/Overlay/Overlay';

import * as sContainers from '@/components/Container/Containers.styles';

import { getArticles, getCategories } from '@/utils/api/articles';
import { articlesPart } from '@/utils/constants';

import { useOverlay } from '../providers/OverlayProvider';
import { CategoryWithUrl, PostMetadata, Project } from '@/utils/types';
import { getProjects } from '@/utils/api/projects';

export const getStaticProps = async () => {
    const category = articlesPart;

    const { articles: recentArticles } = await getArticles({ category, itemsPerPage: 3 });

    const projects = await getProjects();

    const categories = await getCategories();

    return {
        props: {
            recentArticles,
            categories,
            projects,
        },
    };
};

export default function Home({
    recentArticles,
    categories,
    projects,
}: {
    recentArticles: PostMetadata[];
    categories: CategoryWithUrl[];
    projects: Project[];
}) {
    const { isOverlayVisible } = useOverlay();

    return (
        <>
            <Hero />
            <sContainers.Main>
                <RecentArticles
                    data={recentArticles}
                    categories={categories}
                />
                <AboutMe />
                <Portfolio projects={projects} />
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
