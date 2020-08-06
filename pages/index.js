import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul> */}
      <h1>Welcome to Kids dev tracker!</h1>

      {/* <Link href="/posts/first-post">
              <a className="card">
                <h3>Create</h3>
              </a>
            </Link>

            <Link href="/posts/first-post">
              <a className="card">
                <h3>History</h3>
              </a>
            </Link> */}

      {/* if you link to external page of this next.js app, no need to have a tag */}
      {/*<Link href="/about">
              <a className="card">
                <h3>About</h3>
              </a>
            </Link>

             <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a> */}
    </Layout>
  );
}
