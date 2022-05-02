import { NavLink } from "react-router-dom";

const Kitty = ({ name }) => {
  return (
    <h3>
      <NavLink to={`/kitty/${name}`}>{name}</NavLink>
    </h3>
  );
};

export default Kitty;
