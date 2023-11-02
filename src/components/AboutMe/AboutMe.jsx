import * as sAbout from '@/components/AboutMe/AboutMe.styles';
import * as sContainers from '@/components/Container/Containers.styles';
import * as sTypography from '@/utils/styles/Typography.styles';

import Tag from '@/components/Tag/Tag.styles';

const tags = [
    'Java Script (ES6+)',
    'Type Script',
    'React',
    'Next.js',
    'HTML',
    'CSS',
    'SCSS',
    'Styled Components',
    'Day.js',
    'Figma',
    'Visual Studio Code',
    'GitHub',
    'GIT',
];

const AboutMe = () => {
    return (
        <sContainers.Base>
            <sAbout.Wrapper>
                <sAbout.Main>
                    <sAbout.TextWrapper>
                        <sTypography.H3>O mnie</sTypography.H3>
                        <sTypography.Text>
                            Cześć! Mam na imię Krzysztof. Programowanie to moja pasja odkąd tylko
                            pamiętam. Już od szkolnych lat ciągnęło mnie do różnych języków
                            programowania, tworzyłem pierwsze strony, programy, krótko mówiąc -
                            wcielałem w życie wszystkie małe zajawki. Ta pasja trwa nieprzerwanie do
                            dziś. Zawsze będzie nowy framework, nowa biblioteka czy nowy język
                            którego będę chciał się nauczyć. Wciąż towarzyszy mi niezmienne
                            zaangażowanie do pracy oraz nieprzerwana chęć doskonalenia się i
                            zdobywania nowych umiejętności. Realizuje na ten moment kilka ciekawych
                            projektów z którymi możesz zapoznać się poniżej. :-)
                        </sTypography.Text>
                    </sAbout.TextWrapper>
                    <sAbout.Tech>
                        <sTypography.H4>Z czego aktualnie korzystam</sTypography.H4>
                        <sAbout.TagWrapper>
                            {tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </sAbout.TagWrapper>
                    </sAbout.Tech>
                </sAbout.Main>
            </sAbout.Wrapper>
        </sContainers.Base>
    );
};

export default AboutMe;
