import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewPost } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

import styled from 'styled-components';

const StyledForm = styled.form`
  margin-bottom: 50px;
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  outline: none;
  border: 1px solid rgb(190, 190, 190);
  width: 100%;
  margin-bottom: 20px;
  padding: 7px;
  font-size: 1rem;
`;

const StyledSelect = styled.select`
  outline: none;
  border: 1px solid rgb(190, 190, 190);
  width: 100%;
  margin-bottom: 20px;
  padding: 7px;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  outline: none;
  border: 1px solid rgb(190, 190, 190);
  width: 100%;
  min-height: 150px;
  resize: vertical;
  margin-bottom: 20px;
  padding: 7px;
  font-size: 1rem;
`;

const StyledSubmitBtn = styled.button`
  padding: 7px 12px;
  font-size: 1rem;
  float: right;
  clear: both;
  cursor: pointer;
`;

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="container">
      <StyledTitle>Add a New Post</StyledTitle>
      <StyledForm>
        <StyledLabel htmlFor="postTitle">Post Title:</StyledLabel>
        <StyledInput
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <StyledLabel htmlFor="postAuthor">Author:</StyledLabel>
        <StyledSelect id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </StyledSelect>
        <StyledLabel htmlFor="postContent">Content:</StyledLabel>
        <StyledTextarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <StyledSubmitBtn
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save post
        </StyledSubmitBtn>
      </StyledForm>
    </section>
  );
};
export default AddPostForm;
