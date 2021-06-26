import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPage, NextPageContext } from 'next';
import PostTemplate from '@/components/post';

import { IPost, AppState } from '@/interfaces/index';
import Link from 'next/link';

import { loadData } from '@/actions/index';

import { useRouter } from 'next/dist/client/router';

interface PageProps {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

// const selectData = createSelector(
//   (state: AppState) => state.error,
//   (state: AppState) => state.lastUpdate,
//   (state: AppState) => state.light,
//   (state: AppState) => state.placeholderData,
//   (error, lastUpdate, light, placeholderData) => ({ error, lastUpdate, light, placeholderData }),
// );

interface PostPageProps {
  post: IPost;
}

const Post: NextPage = ({ post: serverPost }: any) => {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();
  const selectPosts = (state: AppState) => state.placeholderData;
  const selector = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      await dispatch(loadData());
    }

    if (!serverPost) {
      load();
    }
  }, []);

  useEffect(() => {
    const postId = Number(router.query.postId);
    const resItem = selector?.filter((item) => Number(item.id) === postId)[0];

    setPost(resItem);
  }, [selector]);

  return (
    <PostTemplate title="">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <hr />
          {/* <pre>
            <code>{JSON.stringify(post, null, 2)}</code>
          </pre> */}
          {/* <p>{post.body}</p> */}
          <Link href={'/allPosts'}>
            <a>Back to all posts</a>
          </Link>
        </>
      ) : (
        <p>Loadin ...</p>
      )}
    </PostTemplate>
  );
};

interface PostNextPageContext extends NextPageContext {
  query: {
    postId: string;
  };
}

export default Post;
