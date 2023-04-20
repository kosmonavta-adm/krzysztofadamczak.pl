import { Sono, Montserrat, Fira_Code, Fira_Mono } from 'next/font/google';
const sono = Sono({ subsets: ['latin', 'latin-ext'] });
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'] });
const firaCoda = Fira_Code({ subsets: ['latin', 'latin-ext'] });

export const theme = {
    font: {
        primary: montserrat.style.fontFamily,
        secondary: sono.style.fontFamily,
        0: firaCoda.style.fontFamily,
    },
    colors: {
        purple: {
            0: '#5048ff',
            1: '#3d33ff',
        },
        white: '#fff',
    },
};
