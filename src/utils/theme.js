import { Sono } from 'next/font/google';
const sono = Sono({ subsets: ['latin', 'latin-ext'] });

export const theme = {
    font: sono.style.fontFamily,
    colors: {
        purple: {
            0: '#5048ff',
            1: '#3d33ff',
        },
        white: '#fff',
    },
};
