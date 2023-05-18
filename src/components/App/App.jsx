import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserInfo, signUp, signIn, signOut, editProfile, getFavMovies, likeMovie, dislikeMovie } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/filterMovies';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [formError, setFormError] = useState({ isError: false, text: '' });
  const [savedMovies, setSavedMovies] = useState([]);
  const previousSearch = JSON.parse(localStorage.getItem('movies'));
  const [searchedMovies, setSearchedMovies] = useState(previousSearch || []);
  const [searchError, setSearchError] = useState({ isError: false, text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    signUp({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        setIsLoggedIn(true);
        navigate('/movies');
        setFormError({ isError: false, text: '' })
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
  };

  const handleSignOut = () => {
    signOut()
      .then(() => {
        setCurrentUser({ name: '', email: '' });
        setIsLoggedIn(false);
        setFormError({ isError: false, text: '' });
        navigate('/');
        localStorage.clear();
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
  };

  const handleEditProfile = ({ name, email }) => {
    editProfile({ name, email })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        setFormError({ isError: false, text: '' });
      })
      .catch(err => setFormError({ isError: true, text: err.message }));
  };

  const handleSearchMovies = (searchParams) => {
    getMovies()
      .then(allMovies => {
        const filterResult = filterMovies(allMovies, searchParams, setSearchError);
        setSearchedMovies(filterResult);
      })
      .catch(() => setSearchError({ isError: true, text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' }));
  };

  // возможно перенести внутрь saved movies компонент
  const handleSearchFavMovies = () => {
    console.log('handlesearchFAV');
  }

  const handleLikeMovie = (movieData) => {
    likeMovie(movieData)
      .then(likedMovie => {
        if (!savedMovies.some(movie => movie.id === likedMovie.id)) {
          setSavedMovies([...savedMovies, likedMovie]);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        };
        console.log(savedMovies)
        console.log(likedMovie)
      })
      .catch(err => console.log(err.message));
  };

  const handleDislikeMovie = (movieId) => {
    dislikeMovie(movieId)
    .then(dislikedMovie => {
      console.log(dislikedMovie, 'no you disliked');
      setSavedMovies(savedMovies.push(dislikedMovie));
    })
    .catch(err => console.log(err.message));
  };

  // Make a request in order to check the token and autorize
  useEffect(() => {
    getUserInfo()
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email })
        setIsLoggedIn(true);
      })
      .catch(err => console.log(err.message));
    getFavMovies()
      .then(favMovies => {
        setSavedMovies(favMovies);
        setSearchError({ isError: false, text: '' });
        localStorage.setItem('savedMovies', JSON.stringify(favMovies));
      })
      .catch(() => setSearchError({ 
        isError: true, 
        text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' 
      }))
  }, [isLoggedIn]);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signin" element={
            <Login 
              onLogin={handleLogin}
              formError={formError}
            />
          }/>
          <Route path="/signup" element={
            <Register 
              onRegister={handleRegister} 
              formError={formError}  
            />
          }/>

          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />} > 
            <Route path="/movies" element={
              <Movies 
                searchedMovies={searchedMovies}
                onSearch={handleSearchMovies}
                searchError={searchError}
                onDislike={handleDislikeMovie}
                onLike={handleLikeMovie}
              />
            } />
            <Route path="/saved-movies" element={
              <SavedMovies 
                savedMovies={savedMovies}
                searchError={searchError}
                onSearch={handleSearchFavMovies}
                onDislike={handleDislikeMovie}
                onLike={handleLikeMovie}
              />
            } />
            <Route path="/profile" element={
              <Profile 
                formError={formError}
                onEditProfile={handleEditProfile}
                onSignOut={handleSignOut}
              />
            }/>
          </Route>

          <Route path="*" element={<NotFound /> } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
