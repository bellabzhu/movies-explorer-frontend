import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import './Header.css';

function Header ({ place, isLoggedIn }) {
  return (
    <header className={`header header_place_${place}`}>
      <div className="header__container">
          <Logo />
          <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;