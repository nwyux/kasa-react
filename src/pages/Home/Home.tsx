import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import accommodationsData from '../../../data/data.json';
import type { Accommodation } from '../../types/accommodation';
import './Home.scss';

function Home() {
  const accommodations: Accommodation[] = accommodationsData;

  return (
    <main className="home">
      <Banner 
        image="/home-banner.jpg" 
        text="Chez vous, partout et ailleurs" 
      />
      <div className="home__grid">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
