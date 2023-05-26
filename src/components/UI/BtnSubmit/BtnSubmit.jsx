import './BtnSubmit.css';

function BtnSubmit ({ onSubmit, isBtnDisabled, submitBtnText, isSubmiting }) {

  const isDisabled = isSubmiting ? true : isBtnDisabled;

  return(
    <button 
      className="btn-submit"
      type="submit"
      onClick={onSubmit}
      disabled={isDisabled}
    >
      {submitBtnText}
    </button>
  );
};

export default BtnSubmit;