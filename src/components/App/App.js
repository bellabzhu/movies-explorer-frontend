import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { signUp, signIn, signOut } from '../../utils/MainApi';
import './App.css';

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [error, setError] = useState({ isError: false, text: '' });
  console.log(currentUser);

  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    signUp({ name, email, password })
      .then(() => {
        navigate('/signin');
        setError({ isError: false, text: '' })
      })
      .catch((err) => setError({ isError: true, text: err.message }))
  };

  const handleLogin = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => {
        setCurrentUser({ name: res.name, email: email });
        setIsLoggedIn(true);
        navigate('/');
        setError({ isError: false, text: '' })
      })
      .catch((err) => setError({ isError: true, text: err.message }))
  };

  const handleSignOut = () => {
    signOut()
      .then(() => {
        setCurrentUser({ name: '', email: '' });
        setIsLoggedIn(false);
        setError({ isError: false, text: '' })
        navigate('/');
      })
      .catch((err) => setError({ isError: true, text: err.message }))
  };

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/signin" element={
            <Login 
              onLogin={handleLogin}
              error={error}
            />
          }/>
          <Route path="/signup" element={
            <Register 
              onRegister={handleRegister} 
              error={error}  
            />
          }/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={
            <Profile 
              error={error}
              onSignOut={handleSignOut}
            />
          }/>
          <Route path="*" element={<NotFound /> } />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
