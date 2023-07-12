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
    const components = {
        p: (props) => <Text {...props} />,
        h1: (props) => <ArticleH1 {...props} />,
        h2: (props) => <ArticleH2 {...props} />,
        h3: (props) => <ArticleH3 {...props} />,
        ol: (props) => <OrderedList {...props} />,
        ul: (props) => <UnorderedList {...props} />,
        li: (props) => <ListItem {...props} />,
    };
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
                            components={components}
                        />
                    </sContainers.Text>
                </sContainers.Base>
                <Footer />
            </sContainers.Main>
            <Overlay isOverlayVisible={isOverlayVisible} />
        </>
    );
}
