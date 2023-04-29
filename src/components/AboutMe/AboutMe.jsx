import Image from 'next/image';

import doubleArrow from '/public/icons/doubleArrow.svg';

import * as sAbout from './AboutMe.styles';
import * as sTypography from '../commons/Typography.styles';
import * as sCommons from '../commons';

const tags = [
    'Java Script (ES6+)',
    'Type Script',
    'HTML',
    'CSS',
    'React',
    'Next.js',
    'Express.js',
    'Day.js',
    'Figma',
    'Visual Studio Code',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'GitHub',
    'GIT',
];

const AboutMe = () => {
    return (
        <sAbout.Wrapper>
            <sAbout.Main>
                <sAbout.TextWrapper>
                    <sTypography.H3>O mnie</sTypography.H3>
                    <sTypography.Text>
                        Cześć! Mam na imię Krzysztof. Programowanie to moja pasja odkąd tylko
                        pamiętam. Już za szkolnych lat ciągnęło mnie do różnych języków
                        programowania, tworzyłem pierwsze strony, programy, krótko mówiąc -
                        wcielałem w życie wszystkie małe zajawki. Ta pasja trwa nieprzerwanie do
                        dziś. Zawsze będzie nowy framework, nowa biblioteka czy nowy język którego
                        będę chciał się nauczyć. Wciąż towarzyszy mi niezmienne zaangażowanie do
                        pracy oraz nieprzerwana chęć doskonalenia się i zdobywania nowych
                        umiejętności. Realizuje na ten moment kilka ciekawych projektów z którymi
                        możesz zapoznać się poniżej. :-)
                    </sTypography.Text>
                </sAbout.TextWrapper>
                <sAbout.Tech>
                    <sTypography.H4>Technologie z których aktualnie korzystam</sTypography.H4>
                    <sAbout.TagWrapper>
                        {tags.map((tag) => (
                            <sCommons.Tag key={tag}>{tag}</sCommons.Tag>
                        ))}
                    </sAbout.TagWrapper>
                </sAbout.Tech>
            </sAbout.Main>
            <sAbout.Links>
                <sTypography.H5>Warto zajrzeć</sTypography.H5>
                <sTypography.TextLink
                    $small
                    href="https://github.com/kosmonavta-adm"
                >
                    <Image
                        src={doubleArrow}
                        width={16}
                        height={16}
                        alt={'Strzałka wskazująca na link'}
                    />
                    GitHub
                </sTypography.TextLink>
            </sAbout.Links>
        </sAbout.Wrapper>
    );
};

export default AboutMe;
