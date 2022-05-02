import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/list">Kitten list</NavLink>
        </li>
        <li>
          <NavLink to="/new-kitty">New kitty</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
