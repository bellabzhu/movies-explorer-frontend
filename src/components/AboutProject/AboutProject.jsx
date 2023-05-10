import './AboutProject.css';

function AboutProject () {

  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__header">О проекте</h2>
        <div className="project__grid">
          <p className="project__subheader">Дипломный проект включал 5 этапов</p>
          <p className="project__subheader">На выполнение диплома ушло 5 недель</p>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="project__table">
          <p className="project__table-item">1 неделя</p>
          <p className="project__table-item">4 недели</p>
          <p className="project__table-item">Back-end</p>
          <p className="project__table-item">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;