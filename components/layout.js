import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Footer from "./footer";
export const siteTitle = "Kids Dev Tracker";

const Container = styled.div`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`;

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children, home }) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav>
        <div>
          <h3>
            <Link href="/about">
              <a>About</a>
            </Link>
          </h3>
          <h3>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </h3>
          <h3>
            <Link href="/kids">
              <a>Your Kids</a>
            </Link>
          </h3>
          <h3>
            <Link href="/add">
              <a>Add</a>
            </Link>
          </h3>
          <h3>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </h3>
        </div>
      </nav>
      <Main>{children}</Main>
      <Footer />
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Container>
  );
}
