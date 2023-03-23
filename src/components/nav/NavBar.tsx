import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hero">Hero</Link>
        </li>
        <li>
          <Link to="/rqhero">RQ Hero</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
