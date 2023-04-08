import * as sHero from './Hero.styles';
import * as sCommons from '../commons/index';

export const Hero = () => (
    <sHero.Wrapper>
        <sHero.H1>Dość błazeństw, żrą mój pęk luźnych fig </sHero.H1>
        <sHero.H2>Fron End Developer</sHero.H2>
        <sCommons.Button>Zobacz moje portfolio</sCommons.Button>
    </sHero.Wrapper>
);
