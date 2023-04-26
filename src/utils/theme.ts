import { Sono, Montserrat } from 'next/font/google';

const sono = Sono({ subsets: ['latin', 'latin-ext'] });
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'] });

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            primary: string;
            secondary: string;
        };
        colors: {
            purple: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
            blue: {
                1: string;
                0: string;
            };
            white: string;
        };
        shadows: {
            subtle: {
                0: string;
                1: string;
            };
            intense: {
                0: string;
                1: string;
            };
            sharp: string;
        };
    }
}

export const theme = {
    font: {
        primary: montserrat.style.fontFamily,
        secondary: sono.style.fontFamily,
    },
    colors: {
        purple: {
            0: 'hsl(243deg 100% 99%)',
            1: 'hsl(243deg 100% 98%)',
            2: 'hsl(243deg 100% 65%)',
            3: 'hsl(243deg 100% 60%)',
        },
        blue: {
            1: 'hsl(213deg 100% 70%)',
            0: 'hsl(213deg 100% 60%)',
        },
        white: 'hsl(0deg 0% 100%)',
    },
    shadows: {
        subtle: {
            0: '0 6px 24px rgb(80 72 255 / 10%)',
            1: '0 10px 30px rgb(80 72 255 / 5%)',
        },
        intense: {
            0: '0 5px 10px rgb(80 72 255 / 70%)',
            1: '0 2px 9px rgb(80 72 255 / 90%)',
        },
        sharp: '0 2px 5px rgb(80 72 255 / 10%)',
    },
};
