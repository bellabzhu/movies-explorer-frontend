import './MoviesCard.css';
import { BASE_URL_MOVIES } from '../../utils/constants';

function MoviesCard ({ movie, isSaved }) {

  const onClickCard = () => {
    window.open(movie.trailerLink, '_blank', 'noreferrer');
  };

  const minutesToHours = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  return(
    <li className="card" onClick={onClickCard}>
      <p className="card__title">{movie.nameRU}</p>
      <p className="card__duration">{minutesToHours(movie.duration)}</p>
      <img src={`${BASE_URL_MOVIES}/${movie.image.url}`} alt={movie.nameRU} className="card__img" />
      <button className={isSaved ? "card__btn card__btn-unsave" : "card__btn card__btn-save"}>
        {isSaved ? <span className="card__icon-saved" /> : "Сохранить"}
      </button>
    </li>
  )
}

export default MoviesCard;