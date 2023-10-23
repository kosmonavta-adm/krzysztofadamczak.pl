import Card from '../Card/Card';

import { Project } from '@/utils/types';

import * as sTypography from '@/utils/styles/Typography.styles';

import * as sContainers from '@/components/Container/Containers.styles';
import * as sPortfolio from '@/components/Portfolio/Portfolio.styles';
import { forwardRef } from 'react';

type TPortfolio = {
    projects: Project[];
};

const Portfolio = forwardRef<HTMLHeadingElement, TPortfolio>(({ projects }, ref) => {
    return (
        <sContainers.Base>
            <sPortfolio.Wrapper>
                <sTypography.H3 ref={ref}>Projekty</sTypography.H3>
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
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;
