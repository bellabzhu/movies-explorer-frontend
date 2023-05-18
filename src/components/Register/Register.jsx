import Form from '../Form/Form';
import { useFormWithValidation } from '../../hooks/useFormValidation';
import './Register.css';

function Register ({ onRegister, formError }) {

  const regForm = useFormWithValidation({ name: '', email: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: regForm.values.name,
      email: regForm.values.email,
      password: regForm.values.password,
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
            formError={formError}
            isValid={regForm.isValid}
          >
            <label className="form__label">
            Имя
              <input 
                className={regForm.errors.name ? "form__input form__input-error" : "form__input"} 
                placeholder="Виталий" 
                type="text"
                required
                name="name"
                value={regForm.values.name}
                onChange={(e) => regForm.handleChange(e)}
                minLength={2}
                maxLength={30}
              />
              </label>
              <span className="form__input-text-error form__input-text-error-name">{regForm.errors.name}</span>
              <label className="form__label">
              E-mail
                <input 
                  className={regForm.errors.email ? "form__input form__input-error" : "form__input"} 
                  placeholder="yandex.@yandex.ru"
                  type="email"
                  required
                  name="email"
                  value={regForm.values.email}
                  onChange={(e) => regForm.handleChange(e)}
                  minLength={1}
                />
              </label>
              <span className="form__input-text-error form__input-text-error-email">{regForm.errors.email}</span>
              <label className="form__label">
              Пароль
                <input
                  className={regForm.errors.password ? "form__input form__input-error" : "form__input"} 
                  type="password" 
                  placeholder="Придумайте надежный пароль" 
                  required
                  name="password"
                  value={regForm.values.password}
                  onChange={(e) => regForm.handleChange(e)}
                  minLength={1}
                />
              </label>
              <span className="form__input-text-error form__input-text-error-pass">{regForm.errors.password}</span>
            </Form>
        </div>
      </section>
    </main>
  );
};

export default Register;