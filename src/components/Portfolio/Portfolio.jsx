import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio () {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link className="portfolio__link" to="https://github.com/bellabzhu/learning-how-to-learn" target="_blank" rel="noopener noreferrer">
            <p className="portfolio__link-name">Статичный сайт</p>
            <p className="portfolio__icon-arrow">&#8599;</p>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link className="portfolio__link" to="https://bellabzhu.github.io/landing_across-Russia/" target="_blank" rel="noopener noreferrer">
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <p className="portfolio__icon-arrow">&#8599;</p>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link className="portfolio__link" to="https://mestobella.nomoredomains.work/" target="_blank" rel="noopener noreferrer">
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <p className="portfolio__icon-arrow">&#8599;</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;