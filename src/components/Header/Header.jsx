import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Header.css';

function Header ({ place }) {

  return (
    <header className={`header header_place_${place}`}>
      <div className="header__container">
        <div className="header__container-left">
          <Logo />
        </div>
        <div className="header__container-right">
          <Link className="header__link" to="/signup">Регистрация</Link>
          <Link className="header__link header__link_color_blue" to="/signin">Войти</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;