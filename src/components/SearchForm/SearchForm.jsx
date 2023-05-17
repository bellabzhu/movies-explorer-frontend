import './SearchForm.css';

function SearchForm ({ onSearch }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return(
    <div className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit}>
          <input className="search__input" placeholder="Найти фильм по ключевым словам"></input>
          <button className="search__submit" type="submit" />
        </form>
        <label className="search__label">
          <input className="search__toggle" type="checkbox" id="toggle" />
          Короткометражки
        </label>
      </div>
    </div>
  )
};

export default SearchForm;