import Head from "next/head";
import KidsCards from "../components/KidsCards";
import Layout, { siteTitle } from "../components/layout";
const { getKids } = require("../server/controllers/kidsContoller");

export default function Kids({ kids }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Your kids</h1>
      <KidsCards kids={kids} />
    </Layout>
  );
}

// getStaticProps are fetched at build time
export async function getStaticProps(context) {
  const result = await getKids();
  const kids = result.map((data) => {
    const kid = data.toObject();
    kid._id = kid._id.toString();
    return kid;
  });
  return {
    props: {
      kids,
    },
  };
}
