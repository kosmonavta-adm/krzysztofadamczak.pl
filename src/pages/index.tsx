import Hero from '@/components/Hero/Hero';
import AboutMe from '@/components/AboutMe/AboutMe';
import Portfolio from '@/components/Portfolio/Portfolio';
import { Nav } from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';

import * as sContainers from '@/components/layout/Containers.styles';

export default function Home() {
    return (
        <>
            <Hero />
            <sContainers.Main>
                <AboutMe />
                <Portfolio />
                <Footer />
            </sContainers.Main>
        </>
    );
}
