import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.jpg'

function AboutMe () {

  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__header">Студентка</h2>
        <div className="about-me__grid">
          <h3 className="about-me__name">Белла</h3>
          <p className="about-me__job">Фронтенд-разработчица, 29&nbsp;лет</p>
          <p className="about-me__description">Фронтенд-разработчица с бесконечным терпением, готовая тыкать в пиксели до тех пор, пока они не станут идеально круглыми. Я не придумала оригинального описания, поэтому скопирую остальное с макета. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «Awesome». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className="about-me__link" to="https://github.com/bellabzhu">GitHub</Link>
          <img className="about-me__pic" src={avatar} alt="Иллюстрация девушки со светлыми волосами в фэнтази стиле."></img>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;