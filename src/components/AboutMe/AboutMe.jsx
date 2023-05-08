import './AboutMe.css';
import { Link } from 'react-router-dom';

function AboutMe () {

  return (
    <section className="about-me">
      <h2 className="about-me__header">Студентка</h2>
      <p className="about-me__name">Белла</p>
      <p className="about-me__job">Фронтенд-разработчица, 29 лет</p>
      <p className="about-me__description">"Девушка, которая знает, как заставить дизайнеров плакать в угол, используя только Ht-mL и CSS."</p>
      <p className="about-me__description">Описание от chatGPT.</p>
      <Link to="https://github.com/bellabzhu">GitHub</Link>
    </section>
  );
}

export default AboutMe;