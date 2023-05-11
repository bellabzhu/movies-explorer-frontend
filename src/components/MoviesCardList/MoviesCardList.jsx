import MoviesCard from '../MoviesCard/MovieCard';
import './MoviesCardList.css';
import card_1 from '../../images/card_1.png';
import card_2 from '../../images/card_2.png';
import card_3 from '../../images/card_3.png';
import card_4 from '../../images/card_4.png';
import card_5 from '../../images/card_5.png';
import card_6 from '../../images/card_6.png';
import card_7 from '../../images/card_7.png';
import card_8 from '../../images/card_8.png';
import card_9 from '../../images/card_9.png';

function MoviesCardList () {
  return(
    <section className="movies-list">
      <div className="movies-list__container">
        <MoviesCard 
          title="В погоне за Бенкси"
          img={card_1}
          duration="27 минут"
          isSaved={true}
        />
        <MoviesCard 
          title="Соберись перед прыжком"
          img={card_2}
          duration="135 минут"
          isSaved={false}
        />
        <MoviesCard 
          title="Когда я думаю о Германии ночью"
          img={card_3}
          duration="123 минуты"
          isSaved={true}
        />
        <MoviesCard 
          title="Gimme Danger: История Игги и The Stooge..."
          img={card_4}
          duration="13 минут"
          isSaved={false}
        />
        <MoviesCard 
          title="Книготорговцы"
          img={card_5}
          duration="42 минуты"
          isSaved={true}
        />
        <MoviesCard 
          title="Баския: Взрыв реальности"
          img={card_6}
          duration="198 минут"
          isSaved={false}
        />
        <MoviesCard 
          title="По волнам: Искусство звука в кино"
          img={card_7}
          duration="137 минут"
          isSaved={false}
        />
      </div>
    </section>
  )
}

export default MoviesCardList;