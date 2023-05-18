import './MoviesCard.css';
import { BASE_URL_MOVIES } from '../../utils/constants';
import { useEffect } from 'react';

function MoviesCard ({ movie, onLike, onDislike }) {

  const imagURl = movie.image.url 
    ? `${BASE_URL_MOVIES}${movie.image.url}`
    : movie.image;

  const onClickCard = () => {
    window.open(movie.trailerLink, '_blank', 'noreferrer');
  };

  const minutesToHours = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}ч ${minutes}м`;
  };

  const isLiked = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    console.log(savedMovies)
    if (!savedMovies) { return false };
    if (savedMovies.some(savedMovie => savedMovie.id === movie.id)) {
      return true;
    };
    return false;
  };

  const handleCardLike = () => {
    if (isLiked) { 
      onDislike(movie.id)
    } else {
      onLike(movie);
    };
  };

  useEffect(() => {
    isLiked(movie);
  }, [movie]);

  return(
    <li className="card">
      <p className="card__title">{movie.nameRU}</p>
      <p className="card__duration">{minutesToHours(movie.duration)}</p>
      <img src={imagURl} alt={movie.nameRU} className="card__img" onClick={onClickCard} />
      <button 
        className={isLiked(movie) ? "card__btn card__btn-unsave" : "card__btn card__btn-save"}
        onClick={handleCardLike}
      >
        {isLiked(movie) ? <span className="card__icon-saved" /> : "Сохранить"}
      </button>
    </li>
  )
};

export default MoviesCard;