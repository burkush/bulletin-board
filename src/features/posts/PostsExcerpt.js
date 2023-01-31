import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import styled from 'styled-components';

const StyledPost = styled.article`
  margin-bottom: 20px;
  width: 100%;
  min-height: 100px;
  padding: 10px;
  border: 1px solid rgb(190, 190, 190);
`;

const StyledPostTitle = styled.h3`
  margin-bottom: 10px;
`;

const StyledPostText = styled.p`
  margin-bottom: 10px;
`;

const StyledPostInfo = styled.p`
  opacity: 0.7;
  margin-bottom: 10px;
`;

const PostsExcerpt = ({ post }) => {
  return (
    <StyledPost>
      <StyledPostTitle>{post.title}</StyledPostTitle>
      <StyledPostText>{post.body.substring(0, 100)}</StyledPostText>
      <StyledPostInfo>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </StyledPostInfo>
      <ReactionButtons post={post} />
    </StyledPost>
  );
};
export default PostsExcerpt;
