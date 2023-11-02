import { ComponentPropsWithoutRef } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import rehypePrismCommon from 'rehype-prism-plus/common';

import Nav from '@/components/Nav/Nav';
import Overlay from '@/components/Overlay/Overlay';
import Footer from '@/components/Footer/Footer';
import { ShortcutButton } from '@/components/ShortcutButton/ShortcutButton.styles';
import { Code } from '@/components/Code/Code.styles';
import Lightbox from '@/components/Lightbox/Lightbox';
import * as sContainers from '@/components/Container/Containers.styles';

import * as sTypography from '@/utils/styles/Typography.styles';
import * as sPages from '@/utils/styles/pages.styles';

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
import { PostMetadata } from '@/utils/types';
import dayjs from 'dayjs';
import Head from 'next/head';

export const getStaticPaths = async () => {
    const paths = await getArticlesPaths();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: Params) => {
    const { article } = context.params;
    const { content, data: metadata } = await getArticleFromSlug(article);

    const articleData = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypePrismCommon],
        },
    });

    return {
        props: { articleData, metadata },
    };
};

export default function Articles({
    articleData,
    metadata,
}: {
    articleData: MDXRemoteSerializeResult;
    metadata: PostMetadata;
}) {
    const { isOverlayVisible } = useOverlay();
    const { date, title, excerpt } = metadata;
    const createdAt = dayjs(date).format('DD.MM.YYYY r.');
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={excerpt}
                />
                <meta
                    property="og:title"
                    content={title}
                />
                <meta
                    property="og:description"
                    content={excerpt}
                />
            </Head>
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
                                pre: (props: ComponentPropsWithoutRef<'code'>) => (
                                    <Code {...props} />
                                ),
                                Lightbox: (props) => <Lightbox {...props} />,
                                ShortcutButton: (props) => <ShortcutButton {...props} />,
                            }}
                        />
                        <sPages.createdAt>
                            <sTypography.Text>Napisano: {createdAt}</sTypography.Text>
                        </sPages.createdAt>
                    </sContainers.Text>
                </sContainers.Base>
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
