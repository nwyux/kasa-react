import { Link } from 'react-router-dom';
import './Error404.scss';

function Error404() {
  return (
    <main className="error404">
      <h1 className="error404__title">404</h1>
      <p className="error404__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error404__link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default Error404;
