import Header from '../Header/Header';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useContext } from 'react';
import { useFormWithValidation } from '../../hooks/useFormValidation';
import './Profile.css';

function Profile ({ formError, onSignOut, onEditProfile }) {

  const currentUser = useContext(CurrentUserContext);
  const profileForm = useFormWithValidation({ name: currentUser.name, email: currentUser.email });
  const [isEditable, setIsEditable] = useState(false);
  
  const onEditBtnClick = () => {
    setIsEditable(true);
  };

  const handleChange = (e) => {
    profileForm.handleChange(e);
    if (e.target.value === currentUser[e.target.name]) {
      profileForm.setIsValid(false);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfile({
      name: profileForm.values.name,
      email: profileForm.values.email,
    });
    setIsEditable(false);
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
            <label className="profile__label profile__label-readonly">Имя
              <input 
                className={profileForm.errors.name ? "profile__input profile__input-error" : "profile__input"}
                type="text"
                placeholder={currentUser.name}
                name="name"
                required
                value={profileForm.values.name}
                onChange={handleChange}
                readOnly={isEditable ? false : true}
                minLength={2}
              />
            </label>
            <span className="form__input-text-error form__input-text-error-name">{profileForm.errors.name}</span>
            <label className="profile__label">Email
              <input 
                className={profileForm.errors.email ? "profile__input profile__input-error" : "profile__input"} 
                type="email" 
                placeholder={currentUser.email}
                name="email"
                required
                value={profileForm.values.email}
                onChange={handleChange}
                readOnly={isEditable ? false : true}
                minLength={2}
              />
            </label>
            <span className="form__input-text-error form__input-text-error-name">{profileForm.errors.email}</span>
          </form>
          <div className="profile__link-container">
          <span className="form__text-error">{formError.isError ? formError.text : ''}</span>
          {isEditable
            ?
            <BtnSubmit
              isBtnDisabled={!profileForm.isValid}
              onSubmit={handleSubmit}
              submitBtnText="Сохранить"
            />
            :
            <button 
              type="button"
              className="profile__btn-edit"
              onClick={onEditBtnClick}
            >Редактировать
            </button>
          }
          <button className="profile__btn-logout" onClick={onSignOutClick}>Выйти из профиля</button>
        </div>
        </div>
      </section>
    </>
  );
};

export default Profile;