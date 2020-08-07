import Head from "next/head";
import KidsCards from "../components/KidsCards";
import Layout, { siteTitle } from "../components/layout";
// import { getSortedPostsData } from "../lib/posts";
import getKids from "../data/data";

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

const Home = ({ kids }) => {
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
      <KidsCards kids={kids} />
    </Layout>
  );
};

Home.getInitialProps = async ({}) => {
  return {
    kids: getKids(),
  };
};

export default Home;
