import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated, TokenData } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/storage';
import './styles.css';

type AuthData = {
  tokenData?: TokenData;
  authenticated: boolean;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  },[]);

  const handleClick = (event:React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace('/')
  }
  return (
    <nav className="navbar main-nav bg-primary">
      <div className="container-fluid">
        <Link className="navbar-logo-text" to="/">
          <h4>MovieFlix</h4>
        </Link>
        <div className= "logout-container">
          {authData.authenticated && (
            <button className="btn" onClick={handleClick}>
              <h5>SAIR</h5>
            </button>
            
          ) }
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
