import Form from '../Form/Form';
import './Login.css';

function Login () {
  return(
      <section className="login">
        <div className="login__container">
          <Form 
            header="Рады видеть!"
            askText="Ещё не зарегистрированы?"
            askLinkText="Регистрация"
            askLink="/signup"
            submitBtnText="Войти"
          >
            <label className="form__label">
            E-mail
              <input 
                className="form__input" 
                placeholder="yandex.@yandex.ru"
                type="email"
                required
                name="email"
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
                name="password"
              />
            </label>
            <span className="form__text-error">Что-то пошло не так...</span>
          </Form>
        </div>
      </section>
  )
}

export default Login;