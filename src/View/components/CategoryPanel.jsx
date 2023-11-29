import React, { useState } from 'react';

import './component.css';
import ImageSvg from './ImageSvg';
const CategoryPanel = () => {
  const [active, setActive] = useState([
    { title: 'Bags', icon: 'Bags', active: false },
    { title: 'Watches', icon: 'Watch', active: false },
    { title: 'Shoes', icon: 'Shoes', active: false },
    { title: 'Glasses', icon: 'Glasses', active: false },
    { title: 'Audio', icon: 'Headphone', active: false },
  ]);

  const handleChangeCategory = title => {
    const result = active.map(elem =>
      elem.title === title
        ? { ...elem, active: true }
        : { ...elem, active: false }
    );
    setActive(result);
  };

  return (
    <div className='categoryPanelComponent'>
      {active.map(elem => (
        <button
          className={
            'categoryPanelComponent_item' +
            `${elem.active ? ' activeCategory' : ''}`
          }
          key={elem.title}
          onClick={() => handleChangeCategory(elem.title)}
        >
          <div
            className={
              'categoryPanelComponent_item-circle' +
              `${elem.active ? ' activeCircle' : ''}`
            }
          >
            <ImageSvg
              config={{
                icon: elem.icon,
                fill: 'none',
                stroke: 'blue',
                size: 30,
              }}
            />
          </div>
          <p className='categoryPanelComponent_item-title'>{elem.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryPanel;
