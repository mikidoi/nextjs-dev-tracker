import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import Layout from "../../components/layout";

const Img = styled.img`
  height: 100%;
  width: 200px;
`;

export default function Kid({ kid }) {
  const kidItem = kid[0];
  return (
    <Layout>
      <h1>{kidItem.name}</h1>
      <Img src={kidItem.photo} alt={kidItem.name} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const slug = "karina";
  const res = await fetch(`http://localhost:3000/kid/${slug}`);
  const kid = await res.json();
  console.log("kid: ", kid);

  const paths = kids.map((kid) => ({
    params: { id: kid.id, slug: kid.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/kid/${params.slug}`);
  const kid = await res.json();

  return { props: { kid } };
}
