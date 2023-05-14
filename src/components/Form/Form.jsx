import './Form.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Form ({ children, header, askText, submitBtnText, askLinkText, askLink, onSubmit, error }) {

  console.log(error);
  return(
    <>
      <Logo />
      <h1 className="form__header">{header}</h1>
      <form className="form__form">
        {children}
      </form>
      <div className="form__link-container">
          <span className="form__text-error">{error.isError ? error.text : ''}</span>
          <button 
              className="form__btn-submit" 
              type="submit"
              onClick={onSubmit}
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