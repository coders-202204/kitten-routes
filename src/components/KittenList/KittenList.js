import Kitty from "../Kitty/Kitty";

const KittenList = () => {
  const kitten = ["Lorenzo", "Nina", "Tigretus", "Garfield"];

  return (
    <>
      <ul className="kitten">
        {kitten.map((kitty) => (
          <li className="kitty" key={kitty}>
            <Kitty name={kitty} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default KittenList;
