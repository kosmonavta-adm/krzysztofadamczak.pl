import Card from '../commons/Card/Card';

import * as sTypography from '../commons/Typography.styles';
import * as sPortfolio from './Portfolio.styles';

type Project = {
    title: string;
    description: string;
    liveUrl: string;
    githubUrl: string;
    thumbnail: string;
    tags: Array<string>;
};

const projects = [
    {
        title: 'czekamna.pl',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta laboriosam debitis quia possimus delectus, minus expedita voluptatibus consequuntur quasi! Possimus a quidem reiciendis neque nostrum soluta ea magni, eligendi repudiandae illum? Corporis dolore, dolor fugit reprehenderit asperiores eaque delectus hic.',
        tags: ['Java Script', 'Express.js'],
        thumbnail: '/12.jpg',
        liveUrl: 'https://google.com',
        githubUrl: 'https://google.com',
    },
    {
        title: 'czekamna.pl',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta laboriosam debitis quia possimus delectus, minus expedita voluptatibus consequuntur quasi! Possimus a quidem reiciendis neque nostrum soluta ea magni, eligendi repudiandae illum? Corporis dolore, dolor fugit reprehenderit asperiores eaque delectus hic.',
        tags: ['Java Script', 'Express.js'],
        thumbnail: '/p1_1.png',
        liveUrl: 'https://google.com',
        githubUrl: 'https://google.com',
    },
];

const Portfolio = () => {
    return (
        <sPortfolio.Wrapper>
            <sTypography.H3>Projekty</sTypography.H3>
            <sTypography.Text>
                Poniżej znajduje się kilka projektów nad którymi ostatnio pracowałem.
            </sTypography.Text>
            <sPortfolio.Projects>
                {projects.map((project) => (
                    <Card {...project} />
                ))}
            </sPortfolio.Projects>
        </sPortfolio.Wrapper>
    );
};

export default Portfolio;
