import React from 'react';
import Card from '../Card/Card';
import './style.css';

const CardsList = ({ items }) => {

  return (
    <div className="component-cards-list">
      {items.map((item) => (
        <div className={`card-item ${item.side}`} style={{marginTop: `${item.top ? item.top : '0'}`}}>
          <Card
            img={item.img}
            title={item.title}
            description={item.description}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default CardsList;