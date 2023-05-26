import { BASE_URL_MOVIES } from '../../utils/constants';
import './MoviesCard.css';

function MoviesCard ({ movie, savedMovies, onLike, onDislike, isSubmiting, place }) {

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

  const handleCardLike = () => {
    if (isLiked) {
      // find the id of the movie in savedMovies
      const savedMovieId = savedMovies.find(obj => obj.id === movie.id)._id;
      onDislike(savedMovieId)
    } else {
      onLike(movie);
    };
  };

  const checkIfLiked = (movie, savedMovies) => {
    return savedMovies.some(savedMovie => savedMovie.id === movie.id) 
      ? true 
      : false;
  };

  const isLiked = checkIfLiked(movie, savedMovies);
  
  const btnIcon = place==="saved" ? "card__icon-del" : "card__icon-saved"
  const btnClass = isLiked
    ? `card__btn ${place==='saved' ? "card__btn-del" : "card__btn-unsave"}`
    : "card__btn card__btn-save";

  return(
    <li className="card">
      <p className="card__title">{movie.nameRU}</p>
      <p className="card__duration">{minutesToHours(movie.duration)}</p>
      <img src={imagURl} alt={movie.nameRU} className="card__img" onClick={onClickCard} />
      <button 
        className={btnClass}
        onClick={handleCardLike}
        disabled={isSubmiting}
      >
        {isLiked ? <span className={btnIcon} /> : "Сохранить"}
      </button>
    </li>
  );
};

export default MoviesCard;