import { useState } from 'react';
import './SearchForm.css';

function SearchForm ({ onSearch }) {
  const isUserCheckedBefore = localStorage.getItem('isChecked');
  const [isChecked, setIsChecked] = useState( isUserCheckedBefore ? true : false);

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
  };

  const searchParams = { isShortFilmsIncluded: isChecked }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return(
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" placeholder="Поиск фильма"></input>
          <button className="search__submit" type="submit" />
        </form>
        <label className="search__label">
          <input 
            className="search__toggle" 
            type="checkbox" 
            onChange={toggleCheckbox}
            checked={isChecked}
          />
          Короткометражки
        </label>
      </div>
    </div>
  )
};

export default SearchForm;