import './BtnSubmit.css';

function BtnSubmit ({ onSubmit, isBtnDisabled, submitBtnText }) {
  return(
    <button 
      className="btn-submit"
      type="submit"
      onClick={onSubmit}
      disabled={isBtnDisabled}
    >
      {submitBtnText}
    </button>
  );
};

export default BtnSubmit;