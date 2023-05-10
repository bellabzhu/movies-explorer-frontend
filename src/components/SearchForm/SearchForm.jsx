import './SearchForm.css';

function SearchForm () {
  return(
    <div className="search">
      <div className="search__container">
        <form className="search__form">
          <input className="search__input" placeholder="Фильм"></input>
          <button className="search__submit" type="submit" />
        </form>
        <label className="search__label">
          <input className="search__toggle" type="checkbox" id="toggle" />
          Короткометражки
        </label>
      </div>
    </div>
  )
}

export default SearchForm;