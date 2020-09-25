import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EditSvg from "../../assets/svg/edit.svg";
import Layout from "../../components/layout";

const Img = styled.img`
  height: 100%;
  width: 200px;
`;

export default function Kid() {
  const [kid, setKid] = useState({});

  const router = useRouter();
  const slug = router.query.slug;

  const fetchKidBySlug = async () => {
    try {
      const res = await axios.get(`/api/kid/${slug}`);
      const { data } = res;
      setKid(data);
    } catch (error) {
      console.error(error);
    }

    // If I use fetch API:
    // await fetch(`/api/kid/${slug}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setKid(data);
    //   });
  };

  useEffect(() => {
    if (slug) {
      fetchKidBySlug(slug);
    }
  }, [slug]);

  return (
    <Layout>
      {Object.keys(kid).length !== 0 ? (
        <>
          <a href={`/kids/edit/${kid._id}`}>
            <EditSvg width={30} height={35} />
          </a>
          <h1>{kid.name}</h1>
          <Img src={`/images/${kid.photo}`} alt={kid.name} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const request = await fetch("http://localhost:3000/api/kids");
//   const kids = await request.json();
//   console.log("kids: ", kids);

//   const paths = kids.map((kid) => ({
//     params: { slug: kid.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log("params: ", params);
//   const request = await fetch(`http://localhost:3000/kid/${params.slug}`);
//   const slug = await request.json();

//   return {
//     props: {
//       slug,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const slug = "karina";
//   const res = await fetch(`http://localhost:3000/kid/${slug}`);
//   const kid = await res.json();
//   console.log("kid: ", kid);

//   const paths = kids.map((kid) => ({
//     params: { id: kid.id, slug: kid.slug },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/kid/${params.slug}`);
//   const kid = await res.json();

//   return { props: { kid } };
// }
