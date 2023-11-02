import { GetStaticProps } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Head from 'next/head';

import Sidebar from '@/components/Sidebar/Sidebar';
import CategoriesSection from '@/components/Sidebar/parts/CategoriesSection/CategoriesSection';
import Nav from '@/components/Nav/Nav';
import Overlay from '@/components/Overlay/Overlay';
import Pagination from '@/components/Pagination/Pagination';
import Footer from '@/components/Footer/Footer';

import { getArticles, getCategories, getCategoriesPaths } from '@/utils/api/articles';
import { convertFromSlug, getArticlesData } from '@/utils/helpers';
import { articlesPart, ITEMS_PER_PAGE } from '@/utils/constants';

import * as sContainers from '@/components/Container/Containers.styles';
import * as sTypography from '@/utils/styles/Typography.styles';

import { useOverlay } from '@/providers/OverlayProvider';
import { CategoryWithUrl, PostMetadata } from '@/utils/types';

export const getStaticPaths = async () => {
    const paths = await getCategoriesPaths();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context: Params) => {
    const { pagination } = context.params;

    const getPageDetails = (details: string[]) => {
        if (details.length === 1) {
            return {
                category: articlesPart,
                page: Number(details[0]),
            };
        }
        const [category, page] = details;

        return { category: convertFromSlug(category), page: Number(page) };
    };

    const { category, page } = getPageDetails(pagination);

    const currentPage = Number(page);

    const { pages, articles } = await getArticles({
        page,
        fromCategory: category,
        itemsPerPage: ITEMS_PER_PAGE,
    });

    const categories = await getCategories();

    return {
        props: {
            articles,
            pages,
            category,
            categories,
            currentPage,
        },
    };
};

export default function Articles({
    articles,
    pages,
    category,
    categories,
    currentPage,
}: {
    articles: PostMetadata[];
    pages: number;
    category: string;
    categories: CategoryWithUrl[];
    currentPage: number;
}) {
    const { isOverlayVisible } = useOverlay();

    const isAllArticles = category === articlesPart;

    return (
        <>
            <Head>
                <title>
                    Krzysztof Adamczak -{' '}
                    {isAllArticles ? 'wszystkie wpisy' : `kategoria: ${category}`}
                </title>
                <meta
                    name="description"
                    content={
                        isAllArticles ? 'Lista wszystkich wpisów' : `Wpisy z kategorii: ${category}`
                    }
                />
                <meta
                    property="og:title"
                    content={`Krzysztof Adamczak - ${
                        isAllArticles ? 'wszystkie wpisy' : `kategoria: ${category}`
                    }`}
                />
                <meta
                    property="og:description"
                    content={
                        isAllArticles ? 'Lista wszystkich wpisów' : `Wpisy z kategorii: ${category}`
                    }
                />
            </Head>
            <sContainers.Top>
                <Nav position="nav" />
            </sContainers.Top>
            <sContainers.Main>
                <sContainers.Base>
                    <sContainers.WrapperWithSidebar>
                        <sContainers.Articles>
                            <sTypography.H3 accent>
                                {isAllArticles ? 'Wszystkie wpisy' : `Kategoria: ${category}`}
                            </sTypography.H3>
                            <sContainers.ArticlesList>
                                {getArticlesData(articles)}
                            </sContainers.ArticlesList>
                            <Pagination
                                category={category.toLowerCase()}
                                pages={pages}
                                currentPage={currentPage}
                            />
                        </sContainers.Articles>
                        <Sidebar>
                            <CategoriesSection categories={categories} />
                        </Sidebar>
                    </sContainers.WrapperWithSidebar>
                </sContainers.Base>
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
