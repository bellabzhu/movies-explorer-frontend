import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Burger.css';
import IconProfile from '../IconProfile/IconProfile';

function Burger () {
  
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="burger">
      <button className="burger__button" onClick={toggleMenu} />
      <div className={`burger__container ${isOpened ? "show" : ""}`}>
        <button className="burger__close" onClick={toggleMenu} />
        <nav className="burger__links">
          <NavLink to="/" className="burger__link">Главная</NavLink>
          <NavLink to="/movies" className="burger__link">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="burger__link">Сохраненные фильмы</NavLink>
          <NavLink to="/profile" className="burger__link">{IconProfile}</NavLink>
        </nav>
      </div>
      <div
        className={`page-overlay ${isOpened ? "show" : ""}`}
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Burger;
