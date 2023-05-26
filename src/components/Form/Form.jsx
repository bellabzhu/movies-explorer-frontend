import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import BtnSubmit from '../UI/BtnSubmit/BtnSubmit';
import './Form.css';
import { useEffect, useState } from 'react';

function Form ({ children, header, askText, submitBtnText, askLinkText, askLink, onSubmit, formError, isValid, isSubmiting }) {

  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText(formError.isError ? formError.text : '');
  }, [formError]);

  useEffect(() => {
    setErrorText('');
  }, []);

  return(
    <>
      <Logo />
      <h1 className="form__header">{header}</h1>
      <form className="form__form">
        {children}
      </form>
      <div className="form__link-container">
          <span className="form__text-error">{errorText}</span>
          <BtnSubmit
            onSubmit={onSubmit}
            isBtnDisabled={!isValid}
            isSubmiting={isSubmiting}
            submitBtnText={submitBtnText}
          />
          <p className="form__text-ask">{askText}</p>
          <Link className="form__link" to={askLink}>{askLinkText}</Link>
      </div>
    </>
  );
};

export default Form;