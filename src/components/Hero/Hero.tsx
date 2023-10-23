import { RefObject, useRef } from 'react';

import Nav from '@/components/Nav/Nav';
import Sky from '@/components/Hero/parts/Sky/Sky';

import Button from '@/components/Button/Button.styles';
import * as sHero from '@/components/Hero/Hero.styles';
import * as sSky from '@/components/Hero/parts/Sky/Sky.styles';
import * as sTypography from '@/utils/styles/Typography.styles';

const Hero = ({ projectsRef }: { projectsRef: RefObject<HTMLHeadingElement> }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        if (projectsRef === null) return;
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <sSky.Wrapper>
            <sHero.Wrapper ref={heroRef}>
                <Nav position="hero" />
                <sHero.Main>
                    <sHero.Header>
                        <sTypography.H1 $onDark>Krzysztof Adamczak</sTypography.H1>
                        <sTypography.H2 $onDark>Front End Developer</sTypography.H2>
                    </sHero.Header>
                    <Button onClick={handleClick}>Zobacz moje portfolio</Button>
                </sHero.Main>
            </sHero.Wrapper>
            <Sky heroRef={heroRef} />
        </sSky.Wrapper>
    );
};

export default Hero;
