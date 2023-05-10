import './Register.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Register () {
  return(
    <section className="register">
      <div className="register__container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
        <form className="form">
          <label className="form__label">
          Имя
            <input 
              className="form__input" 
              placeholder="Виталий" 
              type="text"
              required
            />
          </label>
          <span className="form__text-error">Что-то пошло не так...</span>
          <label className="form__label">
          E-mail
            <input 
              className="form__input" 
              placeholder="yandex.@yandex.ru"
              type="email"
              required
            />
          </label>
          <span className="form__text-error"></span>
          <label className="form__label">
          Пароль
            <input 
              className="form__input form__input_error" 
              type="password" 
              placeholder="Придумайте надежный пароль" 
              required
            />
          </label>
          <span className="form__text-error">Что-то пошло не так...</span>
        </form>
        <div className="form__link-container">
        <button 
            className="form__btn-submit" 
            type="submit"
          >Зарегистрироваться
          </button>
          <p className="form__text-ask">Уже зарегистрированы?</p>
          <Link className="form__link" to="/signin">Войти</Link>
        </div>
      </div>
    </section>
  )
}

export default Register;