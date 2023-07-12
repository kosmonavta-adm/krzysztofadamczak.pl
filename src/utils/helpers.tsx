import Post from '@/components/Post/Post';

import { getArticlePath } from '@/utils/constants';

import { PostMetadata } from './types';

export const getRandomInteger = (min: number, max: number) => {
    return Math.round(Math.random() * (max - min) + min);
};

export const convertToSlug = (item: string) => item.toLowerCase().replaceAll(' ', '-');

export const convertFromSlug = (slug: string | string[] | undefined) => {
    if (typeof slug !== 'string') return;
    const firstLetterUpperCase = slug.slice(0, 1).toUpperCase();
    const slugWithProperCase = firstLetterUpperCase + slug.slice(1);
    const result = slugWithProperCase.replaceAll('-', ' ');
    return result;
};

export const getArticlesData = (data: PostMetadata[]) =>
    data.map(({ title, categories, excerpt, uuid }) => {
        const urlTitle = convertToSlug(title);
        const urlCategory = convertToSlug(categories[0]);

        return (
            <Post
                key={uuid}
                title={title}
                excerpt={excerpt}
                url={getArticlePath(urlCategory, urlTitle)}
            />
        );
    });
