import Card from '../Card/Card';

import { Project } from '@/utils/types';

import * as sTypography from '@/utils/styles/Typography.styles';

import * as sContainers from '@/components/Container/Containers.styles';
import * as sPortfolio from '@/components/Portfolio/Portfolio.styles';

const Portfolio = ({ projects }: { projects: Project[] }) => {
    return (
        <sContainers.Base>
            <sPortfolio.Wrapper>
                <sTypography.H3>Projekty</sTypography.H3>
                <sTypography.Text>
                    Poniżej znajduje się kilka projektów nad którymi ostatnio pracowałem.
                </sTypography.Text>
                <sPortfolio.Projects>
                    {projects.map(({ id, ...project }) => (
                        <Card
                            key={id}
                            data={project}
                        />
                    ))}
                </sPortfolio.Projects>
            </sPortfolio.Wrapper>
        </sContainers.Base>
    );
};

export default Portfolio;
