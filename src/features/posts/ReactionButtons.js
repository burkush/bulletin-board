import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
import styled from 'styled-components';

const StyledReaction = styled.button`
  display: inline-block;
  margin-right: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
`;

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <StyledReaction
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </StyledReaction>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
