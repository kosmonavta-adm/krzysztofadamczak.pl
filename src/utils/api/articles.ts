import dayjs from 'dayjs';
import matter from 'gray-matter';
import { PathLike } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getCategoryPath, ITEMS_PER_PAGE } from '../constants';
import { CategoryWithUrl, PostMetadata } from '../types';
import { convertToSlug } from '../helpers';

const ARTICLES_PATH = join('src', 'articles');

const convertSlugToFilename = (slug: string) => {
    const slugSliced = slug.slice(1);
    const firstLetterUpperCase = slug[0].toUpperCase();
    const slugWithProperCase = firstLetterUpperCase + slugSliced;
    const result = slugWithProperCase.replaceAll('-', ' ') + '.mdx';
    return result;
};

export const getArticleFromSlug = async (slug: string) => {
    const filename = convertSlugToFilename(slug);
    const source = await readFromFile(ARTICLES_PATH, filename);
    const { content } = matter(source);
    return content;
};

export const getCategories = async () => {
    const files = await getFilesInDir(ARTICLES_PATH);
    const articlesMetadata = await getFilesMetadata(files);
    const categories = Promise.all(
        articlesMetadata.reduce((result: CategoryWithUrl[], { categories }) => {
            const doesNotHaveCategories = categories === undefined;

            if (doesNotHaveCategories) return result;

            categories.forEach((category) => {
                const isNotIncluded = !result.some(
                    (item: CategoryWithUrl) => item.category === category
                );

                const categoryAsSlug = convertToSlug(category);

                if (isNotIncluded) {
                    result.push({
                        category,
                        url: getCategoryPath(categoryAsSlug),
                        id: crypto.randomUUID(),
                    });
                }
            });
            return result;
        }, [])
    );

    return categories;
};

export const getCategoriesWithItems = (source: PostMetadata[]) =>
    source.reduce((result, { categories }, index) => {
        const doesNotHaveCategories = categories === undefined;
        if (doesNotHaveCategories) return result;

        categories.forEach((category) => {
            if (result[category] === undefined) {
                result[category] = 1;
            }
            if (index % 3 === 0) {
                result[category] += 1;
            }
        });

        return result;
    }, {} as { [key: string]: number });

const getMetadata = (source: Buffer): PostMetadata => {
    const { data: metadata } = matter(source);

    metadata.date = dayjs(metadata.date).toISOString();
    metadata.uuid = crypto.randomUUID();

    return metadata as PostMetadata;
};

const getFilesMetadata = async (files: string[]): Promise<PostMetadata[]> => {
    return await Promise.all(
        files.map(async (file) => {
            const source = await readFromFile(ARTICLES_PATH, file);
            const metadata = getMetadata(source);

            return metadata;
        })
    );
};

export const getArticles = async ({
    itemsPerPage = ITEMS_PER_PAGE,
    category,
    page = 1,
}: { itemsPerPage?: number; category?: string; page?: number } = {}) => {
    const files = await getFilesInDir(ARTICLES_PATH);
    const articlesMetadata = await getFilesMetadata(files);
    const sortedArticlesMetadata = articlesMetadata.sort((a, b) => {
        const previousArticleDate = dayjs(a.date).unix();
        const nextArticleDate = dayjs(b.date).unix();

        if (previousArticleDate > nextArticleDate) return -1;
        if (previousArticleDate < nextArticleDate) return 1;

        return 0;
    });
    const filteredArticles =
        category === 'wpisy' || category === undefined
            ? sortedArticlesMetadata
            : sortedArticlesMetadata.filter(({ categories }: { categories: string[] }) => {
                  return categories.some((categoryToCheck) => {
                      return categoryToCheck.toLowerCase() === category.toLowerCase();
                  });
              });
    const pages = Math.ceil(filteredArticles.length / itemsPerPage);

    const startIndex = page === 1 ? page - 1 : itemsPerPage * (page - 1);
    const endIndex = page === 1 ? itemsPerPage : page * itemsPerPage;
    const articles =
        itemsPerPage === undefined
            ? filteredArticles
            : filteredArticles.slice(startIndex, endIndex);
    return { pages, articles };
};

export const getFilesInDir = async (path: PathLike) => await readdir(path);

const readFromFile = async (pathToFile: string, filename: string) => {
    const postPath = join(pathToFile, filename);
    const result = await readFile(postPath);

    return result;
};

export const getArticlesPaths = async () => {
    const files = await getFilesInDir(ARTICLES_PATH);
    const articlesMetadata = await getFilesMetadata(files);
    const paths = articlesMetadata.flatMap(({ title, categories }) =>
        categories.map(() => {
            const titleAsPath = title.toLowerCase().replaceAll(' ', '-');
            return {
                params: {
                    article: titleAsPath,
                },
            };
        })
    );

    return paths;
};

export const getAllArticlesPaths = async () => {
    const files = await getFilesInDir(ARTICLES_PATH);
    const numberOfPages = files.length / ITEMS_PER_PAGE;
    const paths = convertPagesToPaths(numberOfPages);
    return paths;
};

const convertPagesToPaths = (numberOfPages: number) => {
    const result = [];
    for (let i = 0; i < numberOfPages; i++) {
        result.push({
            params: {
                pagination: [String(i + 1)],
            },
        });
    }
    return result;
};

export const getCategoriesPaths = async () => {
    const files = await getFilesInDir(ARTICLES_PATH);
    const numberOfPages = files.length / ITEMS_PER_PAGE;
    const articlesMetadata = await getFilesMetadata(files);

    const categories = getCategoriesWithItems(articlesMetadata);
    const categoriesPaths = convertCategoriesWithItemsToPaths(categories);
    const pagesPaths = convertPagesToPaths(numberOfPages);
    const paths = [...categoriesPaths, ...pagesPaths];

    return paths;
};

const convertCategoriesWithItemsToPaths = (categories: { [key: string]: number }) =>
    Object.entries(categories).reduce((result, [category, articlesInCategory]) => {
        const categoryAsSlug = category.toLowerCase().replaceAll(' ', '-');
        for (let i = 0; i < articlesInCategory; i++) {
            result.push({
                params: {
                    pagination: [categoryAsSlug, String(i + 1)],
                },
            });
        }
        return result;
    }, [] as { [key: string]: { [key: string]: string[] } }[]);
