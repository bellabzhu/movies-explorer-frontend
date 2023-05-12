import Header from '../Header/Header';
import './Profile.css';

function Profile () {
  return(
    <>
      <Header 
        place="profile" 
        isLoggedIn={true}
      />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__header">Привет, Виталий!</h1>
          <form className="profile__form">
            <label className="profile__label">Имя
              <input 
                className="profile__input" 
                type="text"
                placeholder="Виталий"
                required
              />
            </label>
            <label className="profile__label">Email
              <input 
                className="profile__input" 
                type="email" 
                placeholder="google@google.com"
                required
              />
            </label>
          </form>
          <div className="profile__link-container">
          <button 
              className="profile__btn-edit" 
            >Редактировать
            </button>
          <button className="profile__btn-logout">Выйти из профиля</button>
        </div>
        </div>
      </section>
    </>
  )
}

export default Profile;