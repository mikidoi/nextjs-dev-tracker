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
  const name = "Marina";
  const res = await fetch(`http://localhost:3000/kids`);
  const kids = await res.json();

  const paths = kids.map((kid) => ({
    params: { id: kid.id, name: kid.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/kids?name=${params.name}`);
  const kid = await res.json();

  return { props: { kid } };
}
