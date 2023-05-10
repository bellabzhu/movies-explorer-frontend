import './Footer.css';
import { Link } from 'react-router-dom';

function Footer () {

  return (
    <footer className="footer">
      <p className="footer__header">Учебный проект Яндекс.Практикум&nbsp;х&nbsp;BeatFilm.</p>
      <hr className="footer__line" />
      <div className="footer__credits">
        <p className="footer__item footer__item_year">&copy;&nbsp;{new Date().getFullYear()}</p>
        <Link className="footer__item footer__item_pract" to="https://practicum.yandex.ru">Яндекс.Практикум</Link>
        <Link className="footer__item footer__item_git" to="https://github.com/bellabzhu">GitHub</Link>
      </div>
    </footer>
  );
}

export default Footer;
