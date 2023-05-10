import { Link } from "react-router-dom";
import './Header.css';

function Header () {

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-left">
          <Link to="/" className="header__logo" />
        </div>
        <div className="header__container-right">
          <button>Регистрация</button>
          <button>Войти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;