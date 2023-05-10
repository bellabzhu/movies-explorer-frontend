import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App () {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
        <Route path="/saved-movies"></Route>
        <Route path="/profile"></Route>
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
