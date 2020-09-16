import { useState } from "react";
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

    case "SWITCH_OFF":
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

const Account = () => {
  //useState, useReducer and useContext

  const [name, setName] = useState("");
  const [kids, setKids] = useState(initialKids);
  console.log("kids: ", kids);
  console.log("name: ", name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name) {
      setKids([
        ...kids,
        {
          id: 125,
          name,
          active: false,
        },
      ]);
    }

    setName("");
    e.preventDefault();
  };

  const handleChangeCheckbox = (id) => {
    setKids(
      kids.map((kid) => {
        if (kid.id === id) {
          return { ...kid, active: !kid.active };
        } else {
          return kid;
        }
      })
    );
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
                onChange={() => handleChangeCheckbox(kid.id)}
                checked={kid.active}
              />

              {kid.name}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default Account;
