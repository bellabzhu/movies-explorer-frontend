import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

function Navigation ({ isLogged }) {

  return(
    <nav className={isLogged ? "nav nav_status_logged" : "nav"}>
    {isLogged ? 
      (
      <>
        <div className="nav__container-left">
          <NavLink className="nav__link" to="/movies">Фильмы</NavLink>
          <NavLink className="nav__link nav__link_type_bold" to="/saved-movies">Сохраненные фильмы</NavLink>
        </div>
        <NavLink className="nav__container-right" to="/profile">
          <p className="nav__link">Аккаунт</p>
          <div className="nav__icon-profile"></div>
        </NavLink>
      </>
      )
      :
      (
      <>
        <NavLink className="nav__link" to="/signup">Регистрация</NavLink>
        <NavLink className="nav__link nav__link_color_blue" to="/signin">Войти</NavLink>
      </>
      )
    }
    </nav>
  )
}

export default Navigation;