import { Nav } from '@/components/layout/Nav/Nav';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MainContainer } from '../components/layout/MainContainer/MainContainer';
import { theme } from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MainContainer>
                <Nav />
                <Component {...pageProps} />
            </MainContainer>
        </ThemeProvider>
    );
}
