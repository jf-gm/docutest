import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "../Card/Card";
import './style.css';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const CardCarousel = ({ children, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = data.length - 1;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 9000);

    return () => {
      console.log('return >', interval)
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handleClick = (idx) => {
    setPaused(true);
    setActiveIndex(idx);
    setPaused(false);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="component-card-carousel"
      onMouseEnter={() => setPaused(false)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >

        {data.map((items, idx) => (
          <div className="carousel-item" style={{ width: '100%' }} key={`carousel-item-${idx}`}>

          {items.map((item, idx) => (
            <Card
              img={item.img}
              title={item.title}
            />
          ))}

        </div>
        ))}

      </div>
      <div className="indicators">
        {data.map((items, idx) => (
          <button 
            className={activeIndex === idx ? 'active' : ''}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;