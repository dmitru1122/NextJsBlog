import React from 'react';
import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import { AppState } from '../interfaces';
import Post from './post';

// interface PageProps {
// title: string

// }

const LatestPost: React.FC = () => {
  const selectPosts = (state: AppState) => state.placeholderData;
  const placeholderData = useSelector(selectPosts);
  const latestPost = placeholderData?.slice(-1)[0];

  return (
    <Post title="latest post">
      <div>
        <h2>{latestPost?.title}</h2>
        <p>{latestPost?.body}</p>

        {/* {error && <p style={{ color: 'red' }}>Error: {error.message}</p>} */}
      </div>
    </Post>
  );
};

export default LatestPost;
