import { GlobalStyles } from '../utils/Global.styles';
import { Nav } from '@/components/layout/Nav/Nav';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MainContainer } from '../components/layout/MainContainer/MainContainer';
import { theme } from '../utils/theme';
import Footer from '@/components/layout/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
