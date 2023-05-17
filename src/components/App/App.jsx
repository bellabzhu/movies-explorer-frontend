import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getUserInfo, signUp, signIn, signOut, editProfile } from '../../utils/MainApi';
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
  const [searchedMovies, setSearchedMovies] = useState([]);
  console.log(searchedMovies)
  const [movies, setMovies] = useState([]);
  const [searchError, setSearchError] = useState({ isError: false, text: '' });

  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    signUp({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch((err) => setFormError({ isError: true, text: err.message }))
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email });
        setIsLoggedIn(true);
        navigate('/movies');
        setFormError({ isError: false, text: '' })
      })
      .catch((err) => setFormError({ isError: true, text: err.message }))
  };

  const handleSignOut = () => {
    signOut()
      .then(() => {
        setCurrentUser({ name: '', email: '' });
        setIsLoggedIn(false);
        setFormError({ isError: false, text: '' })
        navigate('/');
      })
      .catch((err) => setFormError({ isError: true, text: err.message }))
  };

  const handleEditProfile = ({ name, email }) => {
    editProfile({ name, email })
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email });
        setFormError({ isError: false, text: '' })
      })
      .catch((err) => setFormError({ isError: true, text: err.message }));
  };

  const handleSearchMovies = (searchParams) => {
    getMovies()
      .then(allMovies => {
        console.log(searchParams)
        const filterResult = filterMovies(allMovies, searchParams, setSearchError);
        setSearchedMovies(filterResult);
      })
      .catch((err) => setSearchError({ isError: true, text: err.message }))
  };

  // Do a request in order to check token and autorize
  useEffect(() => {
    getUserInfo()
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email })
      })
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
              />
            } />
            <Route path="/saved-movies" element={
              <SavedMovies 
                searchError={searchError}
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
