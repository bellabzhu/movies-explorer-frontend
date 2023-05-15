import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Form.css';

function Form ({ children, header, askText, submitBtnText, askLinkText, askLink, onSubmit, formError, isValid }) {

  return(
    <>
      <Logo />
      <h1 className="form__header">{header}</h1>
      <form className="form__form">
        {children}
      </form>
      <div className="form__link-container">
          <span className="form__text-error">{formError.isError ? formError.text : ''}</span>
          <button 
              className="form__btn-submit" 
              type="submit"
              onClick={onSubmit}
              disabled={!isValid}
          >
            {submitBtnText}
          </button>
          <p className="form__text-ask">{askText}</p>
          <Link className="form__link" to={askLink}>{askLinkText}</Link>
      </div>
  </>
  )
}

export default Form;