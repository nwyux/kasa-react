import './Banner.scss';

interface BannerProps {
  image: string;
  text?: string;
}

function Banner({ image, text }: BannerProps) {
  return (
    <div className="banner">
      <img src={image} alt="" className="banner__image" />
      <div className="banner__overlay"></div>
      {text && <h1 className="banner__text">{text}</h1>}
    </div>
  );
}

export default Banner;
