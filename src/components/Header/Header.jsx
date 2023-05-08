import { Link } from "react-router-dom";
import './Header.css';

function Header () {

  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      <button>Регистрация</button>
      <button>Войти</button>
    </header>
  );
}

export default Header;