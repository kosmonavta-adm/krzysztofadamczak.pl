import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import MobileNav from '@/components/MobileNav/MobileNav';

import { OverlayProvider } from '../providers/OverlayProvider';

import { GlobalStyles } from '@/utils/styles/Global.styles';
import { theme } from '../utils/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <OverlayProvider>
                    <Component {...pageProps} />
                    <MobileNav />
                </OverlayProvider>
            </ThemeProvider>
        </>
    );
}
