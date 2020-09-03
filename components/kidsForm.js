import { useRouter } from "next/router";
import { useState } from "react";

const KidsForm = (params) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch(`http://localhost:3000/add`, {
      method: "POST",
      body: formData,
      redirect: "follow",
    }).then((res) => {
      router.push("/kids");
      // window.location.href = "http://localhost:3000/kids";
      // This will refresh the page so DONT.
    });
  };
  return (
    <form
      action="/add"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
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
      <label htmlFor="photo">Photo</label>
      <input
        type="file"
        name="photo"
        id="photo"
        accept="image/gif, image/png, image/jpeg"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default KidsForm;
