const NewKitty = () => {
  return (
    <>
      <h2>Create new kitty</h2>
      <form autoComplete="off" noValidate>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </form>
    </>
  );
};

export default NewKitty;
