
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/logo.svg" alt="Kasa" />
      </Link>
      <nav className="header__nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'}
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
