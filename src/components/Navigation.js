import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Link to="/">
      <header className="header">
        <h1 className="heading">Clone Xodus</h1>
      </header>
    </Link>
  );
}

export default Navigation;
