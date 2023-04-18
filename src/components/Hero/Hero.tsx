import * as sHero from './Hero.styles';
import * as sCommons from '../commons/index';
import * as sTypography from '../commons/Typography.styles';

export const Hero = () => (
    <sHero.Wrapper>
        <sHero.Header>
            <sTypography.H1>Krzysztof Adamczak</sTypography.H1>
            <sTypography.H2>Front End Developer</sTypography.H2>
        </sHero.Header>
        <sCommons.Button>Zobacz moje portfolio</sCommons.Button>
    </sHero.Wrapper>
);
