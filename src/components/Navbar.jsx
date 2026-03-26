import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Trio Portfolio
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/select-player">Pick Player</Link>
      </div>
    </nav>
  );
}

export default Navbar;