import type { AppProps } from 'next/app';
import { MainContainer } from '../components/layout/MainContainer/MainContainer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    );
}
