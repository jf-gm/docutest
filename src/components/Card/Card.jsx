import React from 'react';
import './style.css';

const Card = ({
  img = null,
  title = null,
  description = null
}) => {
  return (
    <div className="component-card">
      {img && <img src={img}/>}
      {title && <div className="title">{title}</div>}
      {description && <div className="description">{description}</div>}
    </div>
  );
};

export default Card;