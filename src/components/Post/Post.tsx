import * as sPost from '@/components/Post/Post.styles';
import * as sTypography from '@/utils/styles/Typography.styles';

export const Post = ({ title, excerpt, url }: { title: string; excerpt: string; url: string }) => {
    return (
        <sPost.Wrapper>
            <sPost.Title>
                <sTypography.TextLinkBlank href={url}>{title}</sTypography.TextLinkBlank>
            </sPost.Title>
            <sTypography.Text>{excerpt}</sTypography.Text>
            <sPost.ReadMore href={url}>Czytaj dalej</sPost.ReadMore>
        </sPost.Wrapper>
    );
};

export default Post;
