import { Nav } from '../layout/Nav/Nav';
import Sky from './parts/Sky/Sky';
import * as sCommons from '../commons/index';

import * as sHero from './Hero.styles';
import * as sTypography from '../commons/Typography.styles';
import * as sContainers from '@/components/layout/Containers.styles';
import * as sSky from '@/components/Hero/parts/Sky/Sky.styles';

const Hero = () => {
    return (
        <sSky.Wrapper>
            <sContainers.Base>
                <sHero.Wrapper>
                    <Nav $onDark />
                    <sHero.Main>
                        <sHero.Header>
                            <sTypography.H1 $onDark>Krzysztof Adamczak</sTypography.H1>
                            <sTypography.H2 $onDark>Front End Developer</sTypography.H2>
                        </sHero.Header>
                        <sCommons.Button>Zobacz moje portfolio</sCommons.Button>
                    </sHero.Main>
                </sHero.Wrapper>
            </sContainers.Base>
            <Sky />
        </sSky.Wrapper>
    );
};

export default Hero;
