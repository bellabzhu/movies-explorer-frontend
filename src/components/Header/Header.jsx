import { Link } from "react-router-dom";
import './Header.css';

function Header () {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-left">
          <Link className="header__logo" to="/" />
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