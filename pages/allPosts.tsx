import React from 'react';
import { NextPage } from 'next';
import { END } from 'redux-saga';
import AllPost from '@/components/allPost';
import { loadData } from '../actions';
import { wrapper } from '../store';

const Index: NextPage = () => {
  return <AllPost title="Post" />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

// export function getServerSideProps() {
//   const reduxStore = initializeStore();
// }

export default Index;
