export const articlesPart = 'wpisy';
export const categoryPart = 'kategoria';

export const getArticlePath = (category: string, title: string) => `/${title}`;

export const getCategoryPath = (category: string) => `/${articlesPart}/${category}/1`;
export const getPaginationPath = (category: string, page: number) => {
    if (category === articlesPart) return `/${articlesPart}/${page}`;
    return `/${articlesPart}/${category}/${page}`;
};

export const menuPaths = [
    {
        title: 'Strona główna',
        id: 'strona-główna',
        url: '/',
    },
    {
        title: 'Wpisy',
        id: `${articlesPart}`,
        url: `/${articlesPart}/1`,
    },
    {
        title: 'Kontakt',
        id: 'kontakt',
        url: '/kontakt',
    },
];

export const ITEMS_PER_PAGE = 5;
