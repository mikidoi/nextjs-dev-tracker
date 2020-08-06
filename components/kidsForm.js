export default function KidsForm(params) {
  return (
    <form action="/" method="post">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <input type="submit" value="Save" />
    </form>
  );
}
