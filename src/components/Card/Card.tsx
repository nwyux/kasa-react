import { Link } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  id: string;
  title: string;
  cover: string;
}

function Card({ id, title, cover }: CardProps) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <div className="card__overlay"></div>
      <h3 className="card__title">{title}</h3>
    </Link>
  );
}

export default Card;
