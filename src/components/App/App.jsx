import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
  const previouslySaved = JSON.parse(localStorage.getItem('savedMovies'));
  const [savedMovies, setSavedMovies] = useState(previouslySaved);
  const previousSearch = JSON.parse(localStorage.getItem('movies'));
  const [searchedMovies, setSearchedMovies] = useState(previousSearch || []);
  const [searchSavedMovies, setSearchedSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState({ isError: false, text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const navigate = useNavigate();

  const renderSavedMovies = searchSavedMovies.length > 0 && !searchError.isError
  ? searchSavedMovies
  : searchError.isError 
    ? [] 
    : savedMovies;

  const handleRegister = ({ name, email, password }) => {
    setIsSubmiting(true);
    signUp({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsSubmiting(false));
  };

  const handleLogin = ({ email, password }) => {
    setIsSubmiting(true);
    signIn({ email, password })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        setIsLoggedIn(true);
        setFormError({ isError: false, text: '' });
        navigate('/movies');
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsSubmiting(false));
  };

  const handleSignOut = () => {
    setIsSubmiting(true);
    signOut()
      .then(() => {
        navigate('/');
        setCurrentUser({ name: '', email: '' });
        setIsLoggedIn(false);
        setFormError({ isError: false, text: '' });
        localStorage.clear();
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsSubmiting(false));
  };

  const handleEditProfile = ({ name, email }) => {
    setIsSubmiting(true);
    editProfile({ name, email })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        setFormError({ isError: false, text: '' });
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsSubmiting(false));
  };

  const handleSearchMovies = (searchParams) => {
    setIsSubmiting(true);
    setIsLoading(true);
    getMovies()
      .then(allMovies => {
        const filterResult = filterMovies(allMovies, searchParams, setSearchError);
        setSearchedMovies(filterResult);
      })
      .catch(() => {
        setSearchError({ isError: true, text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' });
      })
      .finally(() => {
        setIsSubmiting(false);
        setIsLoading(false);
      });
  };

  const handleSearchSavedMovies = (searchParams) => {
    const filterResult = filterMovies(savedMovies, searchParams, setSearchError);
    setSearchedSavedMovies(filterResult);
  };

  const handleLikeMovie = (movieData) => {
    setIsSubmiting(true);
    likeMovie(movieData)
      .then(likedMovie => {
        if (!savedMovies.some(movie => movie.id === likedMovie.id)) {
          setSavedMovies([...savedMovies, likedMovie]);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        };
      })
      .catch(err => console.log(err.message))
      .finally(() => setIsSubmiting(false));
  };

  const handleDislikeMovie = (movieId) => {
    setIsSubmiting(true);
    dislikeMovie(movieId)
      .then(dislikedMovie => {
        const updatedMovies = savedMovies.filter(movie => movie._id !== dislikedMovie._id);
        setSavedMovies(updatedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch(err => console.log(err.message))
      .finally(() => setIsSubmiting(false));
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
  }, []);

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route exact path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signin" element={
            <Login 
              onLogin={handleLogin}
              formError={formError}
              isSubmiting={isSubmiting}
            />
          }/>
          <Route path='/signup' element={
            <Register 
              onRegister={handleRegister} 
              formError={formError}
              isSubmiting={isSubmiting}
            />
          }/>

          <Route element={isLoggedIn && <ProtectedRoute isLoggedIn={isLoggedIn} />} > 
            <Route path='/movies' element={
              <Movies 
                searchedMovies={searchedMovies}
                onSearch={handleSearchMovies}
                searchError={searchError}
                setSearchError={setSearchError}
                onDislike={handleDislikeMovie}
                onLike={handleLikeMovie}
                savedMovies={savedMovies}
                isLoading={isLoading}
                isSubmiting={isSubmiting}
              />
            } />
            <Route path='/saved-movies' element={
              <SavedMovies 
                savedMovies={renderSavedMovies}
                searchError={searchError}
                setSearchError={setSearchError}
                onDislike={handleDislikeMovie}
                onLike={handleLikeMovie}
                onSearch={handleSearchSavedMovies}
                isLoading={isLoading}
                isSubmiting={isSubmiting}
              />
            } />
            <Route path='/profile' element={
              <Profile 
                formError={formError}
                onEditProfile={handleEditProfile}
                onSignOut={handleSignOut}
                isSubmiting={isSubmiting}
              />
            }/>
          </Route>

          <Route path="/error-404" element={<NotFound />} />
          <Route path="*" element={ <Navigate to="/error-404" /> }/>

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
