import { Sono } from 'next/font/google';
const sono = Sono({ subsets: ['latin', 'latin-ext'] });

export const theme = {
    font: sono.style.fontFamily,
};
