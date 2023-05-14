import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext} from 'react';

function Profile ({ error, onSignOut }) {

  const currentUser = useContext(CurrentUserContext)

  const onSignOutClick = () => {
    onSignOut();
  };

  return(
    <>
      <Header 
        place="profile" 
        isLoggedIn={true}
      />
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__header">{`Привет, ${currentUser.name}!`}</h1>
          <form className="profile__form">
            <label className="profile__label">Имя
              <input 
                className="profile__input" 
                type="text"
                placeholder={currentUser.name}
                required
              />
            </label>
            <label className="profile__label">Email
              <input 
                className="profile__input" 
                type="email" 
                placeholder={currentUser.email}
                required
              />
            </label>
          </form>
          <div className="profile__link-container">
          <button 
              className="profile__btn-edit" 
            >Редактировать
            </button>
          <button className="profile__btn-logout" onClick={onSignOutClick}>Выйти из профиля</button>
        </div>
        </div>
      </section>
    </>
  )
}

export default Profile;