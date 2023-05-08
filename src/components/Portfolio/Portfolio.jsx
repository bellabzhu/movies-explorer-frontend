import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio () {

  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul>
        <li>
          <Link to="/">Статичный сайт</Link>
        </li>
        <li>
          <Link to="/">Адаптивный сайт</Link>
        </li>
        <li>
          <Link to="/">Одностраничное приложение</Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;