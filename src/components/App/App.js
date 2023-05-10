import Main from '../Main/Main';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App () {

  const [currentUser, setCurrentUser] = useState('Петя');

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" eleemtn={<Profile />}></Route>
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
