import { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm ({ onSearch }) {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const userCheckedBefore = localStorage.getItem('isChecked');
    setIsChecked(userCheckedBefore === 'true' ? true : false);
    const userSearchBefore = localStorage.getItem('search');
    setSearchValue(
      userSearchBefore 
        ? userSearchBefore
        : ''
    );
  }, []);

  const toggleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(e.target.checked));
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('search', searchValue);
    onSearch({
      isShortFilmsIncluded: isChecked,
      text: searchValue,
    });
  };

  return(
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input 
            className="search__input" 
            placeholder="Поиск фильма" 
            required 
            value={searchValue}
            onChange={handleChange}
          />
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