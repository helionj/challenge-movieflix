import { Link } from 'react-router-dom';
import './styles.css';
const Navbar = () => {
  return (
    <nav className="navbar main-nav bg-primary">
      <div className="container-fluid">
        <Link className="navbar-logo-text" to="/">
          <h4>MovieFlix</h4>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
