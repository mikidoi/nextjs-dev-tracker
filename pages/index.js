import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const Home = ({ kids }) => {
  // console.log("kids: ", kids);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Welcome to Kids dev tracker!</h1>
      {/* <KidsCards kids={kids} /> */}
    </Layout>
  );
};

// export async function getStaticProps() {
//   // const res = await fetch("http://localhost:3000/kids");
//   // console.log("res: ", res);
//   // const kids = await res.json();
//   // return { props: { kids } };
//   try {
//     const res = await fetch("http://localhost:3000");
//     console.log("res: ", res);
//     const kids = await res.json();
//     return { props: { kids } };
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
export default Home;
