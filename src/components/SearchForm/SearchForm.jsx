import { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm ({ onSearch }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const userCheckedBefore = localStorage.getItem('isChecked');
    if (userCheckedBefore === 'true') {
      setIsChecked(true);
      return;
    }
    setIsChecked(false);
  }, []);

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(e.target.checked));
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