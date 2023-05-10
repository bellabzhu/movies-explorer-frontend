import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFound () {

  const navigate = useNavigate();

  return(
    <div className="not-found">
    <h1 className="not-found__header">404</h1>
    <p className="not-found__subheader">Страница не найдена</p>
    <Link className="not-found__link" onClick={() => navigate(-1)}>Назад</Link>
    </div>
  )
}

export default NotFound;