import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

// let childrenType: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface PageProps {
  title: string;
  children: JSX.Element;
}
const Header = styled.header`
  color: black;
  background-color: #f5f2e1;
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const A = styled.a`
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 22px;
`;

const PostTemplate = ({ title, children }: PageProps): JSX.Element => {
  // const title  = title;
  // const const dispatch = useDispatch()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="keywords" content="Blog, Post" />
        <meta name="describtion" content="This is a post from different users" />
      </Head>
      <Header>
        <Nav>
          <Link href="/" passHref>
            <A>Last Post</A>
          </Link>
          <Link href="/allPosts" passHref>
            <A href="#/">all posts</A>
          </Link>
          <Link href="/posts/createPost" passHref>
            <A href="#/">Create post</A>
          </Link>
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
};

export default PostTemplate;
