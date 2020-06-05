import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Layout>
        <h1>First Post</h1>
      </Layout>
    </>
  );
}
