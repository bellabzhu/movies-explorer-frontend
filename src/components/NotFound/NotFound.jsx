import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound () {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-2);
  };

  return(
    <div className="not-found">
    <h1 className="not-found__header">404</h1>
    <p className="not-found__subheader">Страница не найдена</p>
    <Link className="not-found__link" onClick={handleClick}>Назад</Link>
    </div>
  );
};

export default NotFound;