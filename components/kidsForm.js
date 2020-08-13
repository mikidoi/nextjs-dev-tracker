import { useState } from "react";

export default function KidsForm(params) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const kid = { name, description };
    console.log({
      name,
      description,
    });
    fetch(`http://localhost:3000/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kid),
    });
  };
  return (
    <form action="/add" method="post" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}
