import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import accommodationsData from '../../../data/data.json';
import type { Accommodation } from '../../types/accommodation';
import './Logement.scss';

function Logement() {
  const { id } = useParams<{ id: string }>();
  const accommodations: Accommodation[] = accommodationsData;
  
  const accommodation = accommodations.find((acc) => acc.id === id);

  // Si le logement n'existe pas, rediriger vers la page 404
  if (!accommodation) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="logement">
      <Carousel pictures={accommodation.pictures} />
      
      <div className="logement__header">
        <div className="logement__info">
          <h1 className="logement__title">{accommodation.title}</h1>
          <p className="logement__location">{accommodation.location}</p>
          <div className="logement__tags">
            {accommodation.tags.map((tag, index) => (
              <span key={index} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{accommodation.host.name}</p>
            <img 
              src={accommodation.host.picture} 
              alt={accommodation.host.name}
              className="logement__host-picture"
            />
          </div>
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="logement__details">
        <div className="logement__collapse">
          <Collapse title="Description" content={accommodation.description} />
        </div>
        <div className="logement__collapse">
          <Collapse title="Équipements" content={accommodation.equipments} />
        </div>
      </div>
    </main>
  );
}

export default Logement;
