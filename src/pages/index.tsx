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
import { useRef } from 'react';
import Head from 'next/head';

export const getStaticProps = async () => {
    const category = articlesPart;

    const { articles: recentArticles } = await getArticles({
        fromCategory: category,
        itemsPerPage: 3,
    });

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
    const projectsRef = useRef<HTMLHeadingElement>(null);

    return (
        <>
            <Head>
                <title>Krzysztof Adamczak</title>
                <meta
                    name="description"
                    content="Cześć! Mam na imię Krzysztof. Programowanie to moja pasja odkąd tylko
                            pamiętam. Już od szkolnych lat ciągnęło mnie do różnych języków
                            programowania, tworzyłem pierwsze strony, programy, krótko mówiąc -
                            wcielałem w życie wszystkie małe zajawki. Ta pasja trwa nieprzerwanie do
                            dziś."
                />
                <meta
                    property="og:title"
                    content="Krzysztof Adamczak"
                />
                <meta
                    property="og:description"
                    content="Cześć! Mam na imię Krzysztof. Programowanie to moja pasja odkąd tylko
                            pamiętam. Już od szkolnych lat ciągnęło mnie do różnych języków
                            programowania, tworzyłem pierwsze strony, programy, krótko mówiąc -
                            wcielałem w życie wszystkie małe zajawki. Ta pasja trwa nieprzerwanie do
                            dziś."
                />
            </Head>
            <Hero projectsRef={projectsRef} />
            <sContainers.Main>
                <RecentArticles
                    data={recentArticles}
                    categories={categories}
                />
                <AboutMe />
                <Portfolio
                    ref={projectsRef}
                    projects={projects}
                />
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
