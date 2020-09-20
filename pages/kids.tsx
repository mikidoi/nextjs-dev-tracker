import Head from "next/head";
import KidsCards from "../components/KidsCards";
import Layout, { siteTitle } from "../components/layout";
import { useState, useEffect } from "react";

// const Kids = ({ kids }: { kids: Kid[] }) => {
const Kids = () => {
  const [kids, setKids] = useState([]);

  const fetchKids = async () => {
    await fetch("/api/kids")
      .then((response) => response.json())
      .then((data) => {
        setKids(data);
      });
  };

  const handleRemoveKid = async (id: number): Promise<string> => {
    await setKids(kids.filter((kid) => kid._id !== id));
    return await fetch(`/deleteKid/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchKids();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Your kids</h1>
      <KidsCards kids={kids} handleRemoveKid={handleRemoveKid} />
    </Layout>
  );
};

export default Kids;

// getStaticProps are fetched at build time
// export const getStaticProps: GetStaticProps = async () => {
//   const result = await getKids();
//   const kids = result.map((data) => {
//     const kid = data.toObject();
//     kid._id = kid._id.toString();
//     kid.created = kid.created.toString();
//     return kid;
//   });
//   return {
//     props: {
//       kids,
//     },
//   };
// };
