import KidsForm from "../components/KidsForm";
import Layout from "../components/layout";

const Add = () => {
  return (
    <Layout>
      <h1>Add more kid</h1>
      <KidsForm />
    </Layout>
  );
};

// export async function getServerSideProps({ res, params }) {
//   res.writeHead(303, { Location: "http://localhost:3000/kids" });
//   res.end();
//   console.log(res.statusCode);
// }

export default Add;
