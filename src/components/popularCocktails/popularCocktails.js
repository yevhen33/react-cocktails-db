import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './popularCocktails.scss';

const items = [
  {
    src: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    altText: "Margarita",
    caption: "Margarita"
  },
  {
    src: "https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg",
    altText: "Blue Margarita",
    caption: "Blue Margarita"
  },
  {
    src: "https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg",
    altText: "Tommy's Margarita",
    caption: "Tommy's Margarita"
  },
  {
    src: "https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg",
    altText: "Whitecap Margarita",
    caption: "Whitecap Margarita"
  },
  {
    src: "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
    altText: "Strawberry Margarita",
    caption: "Strawberry Margarita"
  }
];

const PopularCocktails = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <h5>{item.caption}</h5>
        <img src={item.src} alt={item.altText}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default PopularCocktails;