import './MoviesCard.css';

function MoviesCard ({ title, duration, img, isSaved }) {
  return(
    <li className="card">
      <p className="card__title">{title}</p>
      <p className="card__duration">{duration}</p>
      <img src={img} alt={title} className="card__img" />
      <button className={isSaved ? "card__btn card__btn-unsave" : "card__btn card__btn-save"}>
        {isSaved ? <span className="card__icon-saved" /> : "Сохранить"}
      </button>
    </li>
  )
}

export default MoviesCard;