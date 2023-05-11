import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Burger from '../Burger/Burger';

function Navigation ({ isLogged }) {

  return(
    <nav className={isLogged ? "nav nav_status_logged" : "nav"}>
    {isLogged ? 
      (
      <>
        <div className="nav__container-left">
          <NavLink className="nav__link nav__link_type_movies" to="/movies">Фильмы</NavLink>
          <NavLink className="nav__link nav__link_type_saved" to="/saved-movies">Сохраненные фильмы</NavLink>
        </div>
        <div className="nav__container-right">
          <Burger />
          <NavLink className="nav__container-right" to="/profile">
          <p className="nav__link nav__link_type_profile">Аккаунт</p>
          <div className="nav__icon-profile"></div>
          </NavLink>
        </div>
      </>
      )
      :
      (
      <>
        <NavLink className="nav__link nav__link_type_signup" to="/signup">Регистрация</NavLink>
        <NavLink className="nav__link nav__link_type_signin" to="/signin">Войти</NavLink>
      </>
      )
    }
    </nav>
  )
}

export default Navigation;