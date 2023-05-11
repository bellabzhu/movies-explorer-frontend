import './Register.css';
import Form from '../Form/Form';

function Register () {
  return(
    <main>
      <section className="register">
        <div className="register__container">
          <Form 
            header="Добро пожаловать!"
            askText="Уже зарегистрированы?"
            askLinkText="Войти"
            askLink="/signin"
            submitBtnText="Зарегистрироваться"
          >
            <label className="form__label">
            Имя
              <input 
                className="form__input" 
                placeholder="Виталий" 
                type="text"
                required
                name="name"
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
    </main>
  )
}

export default Register;