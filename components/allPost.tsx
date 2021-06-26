import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from '../interfaces';
import PostTemplate from './post';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title }: PageProps) => {
  // const { error, placeholderData } = useSelector(selectData);
  const selectPosts = (state: AppState) => state.placeholderData;
  const placeholderData = useSelector(selectPosts);

  return (
    <PostTemplate title="all posts">
      <>
        <h1>{title}</h1>
        <ul>
          {placeholderData?.map((item) => (
            <li key={item.id}>
              <Link href={`posts/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        {/* {error && <p style={{ color: 'red' }}>Error: {error.message}</p>} */}
      </>
    </PostTemplate>
  );
};

export default Page;
