import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MovieCard';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';
import Preloader from '../Preloader/Preloader';
import { SCREEN_L, SCREEN_M, SCREEN_S } from '../../utils/constants';
import './MoviesCardList.css';

function MoviesCardList ({ movies, savedMovies, searchError, onLike, onDislike, isLoading, isSubmiting, place }) {

  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [renderedMovies, setRenderedMovies] = useState({
    renderItemsCount: SCREEN_S.renderItemsCount,
    renderMoreCount: SCREEN_S.renderMoreCount,
    movies: movies,
  });

  const checkScreenSize = () => {
    const width = window.screen.width;
    if (width >= SCREEN_L.minWidth) {
      setRenderedMovies({...renderedMovies, renderItemsCount: SCREEN_L.renderItemsCount, renderMoreCount: SCREEN_L.renderMoreCount });
    } else if (width >= SCREEN_M.minWidth) {
      setRenderedMovies({...renderedMovies, renderItemsCount: SCREEN_M.renderItemsCount, renderMoreCount: SCREEN_M.renderMoreCount });
    } else {
      setRenderedMovies({ ...renderedMovies, renderItemsCount: SCREEN_S.renderItemsCount, renderMoreCount: SCREEN_S.renderMoreCount });
    };
  };

  const handleLoadMore = () => {
    const newCount = renderedMovies.renderItemsCount += renderedMovies.renderMoreCount;
    setRenderedMovies({...renderedMovies, renderItemsCount: newCount });
  };

  useEffect(() => {
    setRenderedMovies({...renderedMovies, movies: movies});
  }, [movies]);

  useEffect(() => {
    checkScreenSize(screenWidth);
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return(
    <section className="movies-list">
      <ul className="movies-list__container">
        {isLoading 
          ? <Preloader /> 
          : renderedMovies.movies && renderedMovies.movies.slice(0, renderedMovies.renderItemsCount).map((movie) => {
          return <MoviesCard 
                  key={movie.id}
                  movie={movie}
                  onLike={onLike}
                  onDislike={onDislike}
                  savedMovies={savedMovies}
                  isSubmiting={isSubmiting}
                  place={place}
                />
          })
        }
      </ul>
      <div className="movies-list__info-container">
        {searchError.isError && 
          <p className="movies-list__error">{searchError.text}</p>
        }
        {movies.length > renderedMovies.renderItemsCount && 
          <BtnSubmit 
            onSubmit={handleLoadMore} 
            isBtnDisabled={false}
            submitBtnText="Загрузить еще"
            isSubmiting={isSubmiting}
          />
        }
      </div>
    </section>
  );
};

export default MoviesCardList;