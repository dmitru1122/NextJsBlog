import React from 'react';
import PostTemplate from '@/components/post';
import CreatePost from '@/components/createPost';

const Page: React.FC = () => {
  return (
    <PostTemplate title="">
      <CreatePost />
    </PostTemplate>
  );
};
export default Page;
