import React from 'react';
import { NextPage } from 'next';

import { END } from 'redux-saga';
import LatestPage from '@/components/lastPost';
import { loadData } from '../actions';
import { wrapper } from '../store';

const Index: NextPage = () => {
  return <LatestPage />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }
  await store.sagaTask?.toPromise();
});

export default Index;
