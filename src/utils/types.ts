export interface PostMetadata {
    title: string;
    category: string;
    date: string;
    excerpt: string;
    uuid: string;
    slug: string;
}

export type Position = 'nav' | 'footer' | 'hero';

export interface CategoryWithUrl {
    category: string;
    url: string;
    id: string;
}

export interface Project {
    img: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    id: string;
}
