// import { getKids } from "../data/data";
import { useReducer } from "react";
import Layout from "../components/layout";

const initialKids = [
  {
    id: 123,
    name: "Marina",
    description: "tiger",
    photo: "/images/marina01.jpg",
    active: false,
  },
  {
    id: 124,
    name: "Karina",
    description: "dinosaurs",
    photo: "/images/karina01.jpg",
    active: true,
  },
];

const kidsReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE":
      return state.map((kid) => {
        if (kid.id === action.id) {
          return { ...kid, active: true };
        } else {
          return kid;
        }
      });
    case "SETOFF":
      return state.map((kid) => {
        if (kid.id === action.id) {
          return { ...kid, active: false };
        } else {
          return kid;
        }
      });

    default:
      break;
  }
};

// const action = {
//   type: 'ACTIVATE',
//   id: 123
// }

const About = () => {
  //Count example
  // const [count, setCount] = useState(0);
  // console.log("count: ", count);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  // useReducer example
  const [kids, dispatch] = useReducer(kidsReducer, initialKids);
  console.log("kids: ", kids);

  // dispatch(action)
  // dispatch({
  //   type: "ACTIVATE",
  //   id: 123,
  // });

  const handleChange = (kid) => {
    dispatch({
      type: kid.active ? "SETOFF" : "ACTIVATE",
      id: kid.id,
    });
  };

  return (
    <Layout>
      <h1>Kids list</h1>
      <ul>
        {kids.map((kid) => (
          <li key={kid.id}>
            <label>
              <input
                type="checkbox"
                checked={kid.active}
                onChange={() => handleChange(kid)}
              />
              {kid.name}
            </label>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default About;
