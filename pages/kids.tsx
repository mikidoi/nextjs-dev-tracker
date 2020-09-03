import Head from "next/head";
import KidsCards from "../components/KidsCards";
import Layout, { siteTitle } from "../components/layout";
import { GetStaticProps } from "next";
const { getKids } = require("../server/controllers/kidsContoller");

interface Kid {
  _id: number;
  description: string;
  name: string;
  photo: string;
}

const Kids = ({ kids }: { kids: Kid[] }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Your kids</h1>
      <KidsCards kids={kids} />
    </Layout>
  );
};

export default Kids;

// getStaticProps are fetched at build time
export const getStaticProps: GetStaticProps = async (context) => {
  const result = await getKids();
  const kids = result.map((data) => {
    const kid = data.toObject();
    kid._id = kid._id.toString();
    kid.created = kid.created.toString();
    return kid;
  });
  return {
    props: {
      kids,
    },
  };
};
