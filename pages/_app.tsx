import { AppProps } from 'next/app';
import { NextPage } from 'next';
import NextNprogress from 'nextjs-progressbar-withdelay';
import { END } from 'redux-saga';
import { wrapper } from '../store';
import { loadData } from '../actions';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNprogress color="#29D" startPosition={0.3} startDelayMs={200} stopDelayMs={200} />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
