import React, { useState } from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { filterData, portfolioData } from './utils';

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems = filteredValue === 1 ? portfolioData
    : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<AiOutlineProject size={40} />}
      />
      <Animate
        play
        duration={1.5}
        delay={0.5}
        start={{
          transform: 'translateY(770px)',
        }}
        end={{
          transform: 'translateY(0px)',
        }}
      >
        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li key={item.filterId}>
                <button
                  className={item.filterId === filteredValue ? 'active' : ''}
                  onClick={() => handleFilter(item.filterId)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleFilter(item.filterId);
                    }
                  }}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="portfolio__content__cards__item"
                  onMouseEnter={() => handleHover(item.id)}
                  onMouseLeave={() => handleHover(null)}
                  onClick={() => window.open(item.link, '_blank')}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.open(item.link, '_blank');
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="portfolio__content__cards__item__img-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="overlay">
                    {
                      item.id === hoveredValue && (
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <ul>
                            {item.tech.map((techItem) => (
                              <li key={techItem}>{techItem}</li>
                            ))}
                          </ul>
                          <a href={item.link} rel="noopener noreferrer" target="_blank">Visit</a>
                          <a href={item.code} rel="noopener noreferrer" target="_blank">Code</a>
                        </div>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Portfolio;
