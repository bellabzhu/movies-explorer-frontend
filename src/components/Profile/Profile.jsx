import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext} from 'react';
import { useFormWithValidation } from '../../hooks/useFormValidation';

function Profile ({ formError, onSignOut, onEditProfile }) {

  const profileForm = useFormWithValidation({ name: '', email: '' });
  const currentUser = useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile({
      name: profileForm.values.name,
      email: profileForm.values.email,
    });
  };

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
                name="name"
                required
                defaultValue={currentUser.name}
                value={profileForm.values.name}
                onChange={(e) => profileForm.handleChange(e)}
              />
            </label>
            <label className="profile__label">Email
              <input 
                className="profile__input" 
                type="email" 
                placeholder={currentUser.email}
                name="email"
                required
                value={profileForm.values.email}
                defaultValue={currentUser.name}
                onChange={(e) => profileForm.handleChange(e)}
              />
            </label>
          </form>
          <div className="profile__link-container">
          <span className="form__text-error">{formError.isError ? formError.text : ''}</span>
          <button 
            className="profile__btn-edit" 
            disabled={profileForm.isValid}
            onClick={handleSubmit}
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