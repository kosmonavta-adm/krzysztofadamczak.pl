import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import Nav from '@/components/Nav/Nav';
import Overlay from '@/components/Overlay/Overlay';
import Footer from '@/components/Footer/Footer';

import * as sContainers from '@/components/Container/Containers.styles';

import { getArticleFromSlug, getArticlesPaths } from '@/utils/api/articles';
import { useOverlay } from '@/providers/OverlayProvider';
import {
    ArticleH1,
    ArticleH2,
    ArticleH3,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
} from '@/utils/styles/Typography.styles';
import { ComponentPropsWithoutRef } from 'react';

export const getStaticPaths = async () => {
    const paths = await getArticlesPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: Params) => {
    const { article } = context.params;
    const source = await getArticleFromSlug(article);
    const articleData = await serialize(source);

    return {
        props: { articleData },
    };
};

export default function Articles({ articleData }: { articleData: MDXRemoteSerializeResult }) {
    const { isOverlayVisible } = useOverlay();

    return (
        <>
            <sContainers.Top>
                <Nav position="nav" />
            </sContainers.Top>
            <sContainers.Main>
                <sContainers.Base>
                    <sContainers.Text>
                        <MDXRemote
                            {...articleData}
                            components={{
                                p: (props: ComponentPropsWithoutRef<'p'>) => <Text {...props} />,
                                h1: (props: ComponentPropsWithoutRef<'h1'>) => (
                                    <ArticleH1 {...props} />
                                ),
                                h2: (props: ComponentPropsWithoutRef<'h2'>) => (
                                    <ArticleH2 {...props} />
                                ),
                                h3: (props: ComponentPropsWithoutRef<'h3'>) => (
                                    <ArticleH3 {...props} />
                                ),
                                ol: (props: ComponentPropsWithoutRef<'ol'>) => (
                                    <OrderedList {...props} />
                                ),
                                ul: (props: ComponentPropsWithoutRef<'ul'>) => (
                                    <UnorderedList {...props} />
                                ),
                                li: (props: ComponentPropsWithoutRef<'li'>) => (
                                    <ListItem {...props} />
                                ),
                            }}
                        />
                    </sContainers.Text>
                </sContainers.Base>
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
