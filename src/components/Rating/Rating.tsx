import './Rating.scss';

interface RatingProps {
  rating: string;
}

function Rating({ rating }: RatingProps) {
  const stars = [1, 2, 3, 4, 5];
  const ratingNumber = parseInt(rating);

  return (
    <div className="rating">
      {stars.map((star) => (
        <svg
          key={star}
          className={`rating__star ${star <= ratingNumber ? 'rating__star--filled' : ''}`}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 0L18.3677 11.1459H29.2658L20.4491 18.0902L23.8168 29.2361L15 22.2918L6.18322 29.2361L9.55093 18.0902L0.734152 11.1459H11.6323L15 0Z" />
        </svg>
      ))}
    </div>
  );
}

export default Rating;
