import Image from 'next/image';

import github from '@/public/icons/github.svg';
import externalLink from '@/public/icons/externalLink.svg';

import { Project } from '@/utils/types';

import * as sTypography from '@/utils/styles/Typography.styles';
import * as sCard from '@/components/Card/Card.styles';

type ProjectWithoutKey = Omit<Project, 'id'>;

const Card = ({ data }: { data: ProjectWithoutKey }) => {
    const { img, title, description, tags, githubUrl, liveUrl } = data;
    return (
        <sCard.Wrapper>
            <sCard.Thumbnail>
                <Image
                    src={img}
                    alt="test"
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    quality={100}
                />
            </sCard.Thumbnail>
            <sCard.Content>
                <sTypography.H4>{title}</sTypography.H4>
                <sTypography.Text>{description}</sTypography.Text>
                <sCard.Tags>
                    {tags.map((tag) => (
                        <sCard.Tag key={tag}>{tag}</sCard.Tag>
                    ))}
                </sCard.Tags>
                <sCard.Links>
                    <sTypography.TextLink
                        $small
                        href={githubUrl}
                    >
                        <Image
                            src={github}
                            alt="GitHub logo"
                            width={24}
                            height={24}
                        />
                        GitHub
                    </sTypography.TextLink>
                    <sTypography.TextLink
                        href={liveUrl}
                        $small
                    >
                        <Image
                            src={externalLink}
                            alt="External link"
                            width={24}
                            height={24}
                        />
                        Live
                    </sTypography.TextLink>
                </sCard.Links>
            </sCard.Content>
        </sCard.Wrapper>
    );
};

export default Card;
