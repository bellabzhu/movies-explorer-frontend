import './Techs.css';

function Techs () {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__header">Технологии</h2>
        <h3 className="techs__subheader">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__item"><p className="techs__item-text">HTML</p></li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;