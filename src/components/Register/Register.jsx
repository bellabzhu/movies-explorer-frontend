import './Register.css';
import Form from '../Form/Form';
import { useState } from 'react';

function Register ({ onRegister }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: name,
      email: email,
      password: password,
    });
  };

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
            onSubmit={onSubmit}
          >
            <label className="form__label">
            Имя
              <input 
                className="form__input" 
                placeholder="Виталий" 
                type="text"
                required
                name="name"
                value={name}
                onChange={handleNameChange}
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
                  value={email}
                  onChange={handleEmailChange}
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
                  value={password}
                  onChange={handlePasswordChange}
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