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
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [formError, setFormError] = useState({ isError: false, text: '' });
  const [savedMovies, setSavedMovies] = useState([]);
  const previousSearch = localStorage.getItem('movies');
  const [searchedMovies, setSearchedMovies] = useState(previousSearch ? JSON.parse(previousSearch) : []);
  const [allMovies, setAllMovies] = useState([]);
  const [searchError, setSearchError] = useState({ isError: false, text: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isAuthorizing, setIsAuthorising] = useState(false);
  const navigate = useNavigate();

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
        setSearchedMovies([]);
        setSavedMovies([]);
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
        setFormError({ isError: true, text: 'Данные профиля успешно сохранены' });
      })
      .catch(err => setFormError({ isError: true, text: err.message }))
      .finally(() => setIsSubmiting(false));
  };

  // get all movies from BeatsFilms API for the first time
  const getAllMovies = () => {
    return new Promise((resolve, reject) => {
      if (allMovies.length > 0) {
        resolve(allMovies);
      } else {
        getMovies()
          .then((movies) => {
            setAllMovies(movies);
            resolve(movies);
          })
          .catch(() => {
            reject('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          })
          .finally(() => {
            setIsSubmiting(false);
            setIsLoading(false);
          });
      };
    });
  };

  // global search from BeatsFilms
  const handleSearchMovies = (searchParams) => {
    setIsSubmiting(true);
    setIsLoading(true);
    getAllMovies()
      .then((movies) => {
        const filterResult = filterMovies(movies, searchParams, setSearchError);
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

  const handleLikeMovie = (movieData) => {
    setIsSubmiting(true);
    likeMovie(movieData)
      .then(likedMovie => {
        if (!savedMovies.some(movie => movie.id === likedMovie.id)) {
          setSavedMovies([...savedMovies, likedMovie]);
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
      })
      .catch(err => console.log(err.message))
      .finally(() => setIsSubmiting(false));
  };

  useEffect(() => {
    if (!isLoggedIn) { return };
    getFavMovies()
      .then(favMovies => {
        setSavedMovies(favMovies);
        setSearchError({ isError: false, text: '' });
      })
      .catch(() => setSearchError({ 
        isError: true, 
        text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' 
      }))
  }, [isLoggedIn]);

  // Make a request in order to check the token and autorize
  useEffect(() => {
    setIsAuthorising(true);
    Promise.all([ getUserInfo(), getFavMovies() ])
      .then(([user, favMovies]) => {
        setCurrentUser({ name: user.name, email: user.email })
        setIsLoggedIn(true);
        setSavedMovies(favMovies);
        setSearchError({ isError: false, text: '' });
      })
      .catch(() => { 
        setSearchError({ 
          isError: true, 
          text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' 
        })
        setIsLoggedIn(false);
      })
      .finally(() => setIsAuthorising(false));
  }, []);

  return (
      <div className="app">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path='/' element={<Main isLoggedIn={isLoggedIn} />} />
            <Route path="/signin" element={isLoggedIn 
              ? <Navigate to="/"/>
              : <Login 
                  onLogin={handleLogin}
                  formError={formError}
                  isSubmiting={isSubmiting}
                />
            }/>
            <Route path='/signup' element={isLoggedIn
              ? <Navigate to="/"/>
              : <Register 
                  onRegister={handleRegister} 
                  formError={formError}
                  isSubmiting={isSubmiting}
                />
            }/>
            <Route element={<ProtectedRoute isAuthorizing={isAuthorizing} isLoggedIn={isLoggedIn} />} > 
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
                  savedMovies={savedMovies}
                  searchError={searchError}
                  setSearchError={setSearchError}
                  onDislike={handleDislikeMovie}
                  onLike={handleLikeMovie}
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
};

export default App;
