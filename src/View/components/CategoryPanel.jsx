import React, { useState } from 'react';

import bags from '../assets/icons/bags.png';
import watches from '../assets/icons/watches.png';
import shoes from '../assets/icons/shoes.png';
import glasses from '../assets/icons/glasses.png';
import audio from '../assets/icons/audio.png';

import './component.css';
const CategoryPanel = () => {
  const [active, setActive] = useState([
    { title: 'Bags', icon: bags, active: false },
    { title: 'Watches', icon: watches, active: false },
    { title: 'Shoes', icon: shoes, active: false },
    { title: 'Glasses', icon: glasses, active: false },
    { title: 'Audio', icon: audio, active: false },
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
            <img
              src={elem.icon}
              alt={elem.title}
              className='categoryPanelComponent_item-img'
            />
          </div>
          <p className='categoryPanelComponent_item-title'>{elem.title}</p>
        </button>
      ))}
    </div>
  );
};

export default CategoryPanel;
