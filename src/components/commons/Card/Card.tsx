import Image from 'next/image';

import github from '/public/icons/github.svg';
import externalLink from '/public/icons/externalLink.svg';

import * as sTypography from '../Typography.styles';

import * as sCard from './Card.styles';
const Card = ({ thumbnail, title, description, tags }) => {
    return (
        <sCard.Wrapper>
            <sCard.Thumbnail>
                <Image
                    src={thumbnail}
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
                        <sCard.Tag>{tag}</sCard.Tag>
                    ))}
                </sCard.Tags>
                <sCard.Links>
                    <sTypography.TextLink href="/">
                        <Image
                            src={github}
                            alt="GitHub logo"
                            width={24}
                            height={24}
                        />
                        GitHub
                    </sTypography.TextLink>
                    <sTypography.TextLink
                        href="/"
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
