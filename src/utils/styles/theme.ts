import { Comfortaa, Open_Sans, Fira_Code } from 'next/font/google';

const sono = Comfortaa({ subsets: ['latin', 'latin-ext'] });
const openSans = Open_Sans({ subsets: ['latin', 'latin-ext'] });
const firaCode = Fira_Code({ subsets: ['latin', 'latin-ext'] });

declare module 'styled-components' {
    export interface DefaultTheme {
        font: {
            primary: string;
            secondary: string;
            code: string;
        };
        colors: {
            shadow: {
                0: string;
                1: string;
            };
            error: {
                0: string;
                1: string;
            };
            accent: {
                light: {
                    0: string;
                    1: string;
                };
                dark: {
                    0: string;
                    1: string;
                };
            };
            purple: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
            blue: {
                0: string;
                1: string;
            };
            grey: {
                0: string;
                1: string;
                2: string;
            };
            neutral: {
                0: string;
                1: string;
            };
            black: string;
            white: string;
        };
        shadows: {
            low: string;
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
        animation: string;
    }
}

export const theme = {
    font: {
        primary: openSans.style.fontFamily,
        secondary: sono.style.fontFamily,
        code: firaCode.style.fontFamily,
    },
    colors: {
        shadow: {
            0: '229deg 25% 85%',
            1: '229deg 25% 90%',
        },
        error: {
            0: '#FF3E00',
            1: '#ffa7a7',
        },
        accent: {
            light: {
                0: '#7996ff',
                1: '#bdcbff',
            },
            dark: {
                0: '#093eff',
                1: '#2555ff',
            },
        },
        neutral: {
            0: 'hsl(0deg 0% 80%)',
            1: 'hsl(0deg 0% 70%)',
        },
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
        grey: {
            0: 'hsl(0deg 0% 15%)',
            1: 'hsl(0deg 0% 25%)',
            2: 'hsl(0deg 0% 40%)',
        },
        black: 'hsl(0deg 0% 12.16%)',
        white: 'hsl(0deg 0% 100%)',
    },
    shadows: {
        low: `
            0.7px 0.7px 1.3px hsl(227deg 46% 65% / 0.1),
            1.1px 1.1px 2.1px -0.6px hsl(227deg 46% 65% / 0.17),
            2.1px 2.1px 3.9px -1.2px hsl(227deg 46% 65% / 0.24)
        `,
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
    animation: '0.2s ease',
};
