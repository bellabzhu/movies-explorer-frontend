import { useState, useEffect } from 'react';
import './SearchForm.css';

function SearchForm ({ onSearch, isGlobalSearch, setSearchError, isSubmiting }) {
  const [isChecked, setIsChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

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
    setSearchError({ isError: false, text: '' });
    onSearch({
      isShortFilm: e.target.checked,
      keywords: searchValue,
      isGlobalSearch: isGlobalSearch,
    });
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    setIsDisabled(!e.target.value ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchError({ isError: false, text: '' });
    localStorage.setItem('search', searchValue);
    onSearch({
      isShortFilm: isChecked,
      keywords: searchValue,
      isGlobalSearch: isGlobalSearch,
    });
  };

  useEffect(() => {
    setIsDisabled(isSubmiting ? true : false);
}, [isSubmiting]);

  return(
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input 
            className="search__input" 
            placeholder="Искать фильмы" 
            required 
            value={searchValue}
            onChange={handleChange}
          />
          <button 
            className="search__submit" 
            type="submit"
            disabled={isDisabled}
          />
        </form>
        <label className="search__label">
          <input 
            className="search__toggle" 
            type="checkbox" 
            onChange={toggleCheckbox}
            checked={isChecked}
            disabled={isSubmiting}
          />
          Короткометражки
        </label>
      </div>
    </div>
  );
};

export default SearchForm;