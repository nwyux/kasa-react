import { useState } from 'react';
import './Collapse.scss';

interface CollapseProps {
  title: string;
  content: string | string[];
}

function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2103 20.7897L5.98531 12.5647C5.29885 11.8783 4.18754 11.8783 3.50109 12.5647C2.81463 13.2512 2.81463 14.3625 3.50109 15.049L13.9673 25.5152C14.6538 26.2017 15.7651 26.2017 16.4515 25.5152L26.9178 15.049C27.6042 14.3625 27.6042 13.2512 26.9178 12.5647C26.2313 11.8783 25.12 11.8783 24.4336 12.5647L16.2086 20.7897C15.7389 21.2594 14.98 21.2594 14.5103 20.7897H14.2103Z" fill="white"/>
          </svg>
        </span>
      </button>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
