import Form from '../Form/Form';
import './Login.css';
import { useState } from 'react';

function Login ({ onLogin, error }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: email,
      password: password,
    });
  };

  return(
    <main>
      <section className="login">
        <div className="login__container">
          <Form 
            header="Рады видеть!"
            askText="Ещё не зарегистрированы?"
            askLinkText="Регистрация"
            askLink="/signup"
            submitBtnText="Войти"
            onSubmit={onSubmit}
            error={error}
          >
            <label className="form__label">
            E-mail
              <input 
                className="form__input" 
                placeholder="yandex.@yandex.ru"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
            <span className="form__input-text-error"></span>
            <label className="form__label">
            Пароль
              <input 
                className="form__input form__input_error" 
                type="password" 
                placeholder="Придумайте надежный пароль" 
                required
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </label>
            <span className="form__input-text-error">Что-то пошло не так...</span>
          </Form>
        </div>
      </section>
    </main>
  )
}

export default Login;