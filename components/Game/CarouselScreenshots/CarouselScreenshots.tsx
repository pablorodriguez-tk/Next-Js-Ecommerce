import React from 'react';
import { Image } from 'semantic-ui-react';
import Slider from 'react-slick';
import { map } from 'lodash';
import { Poster } from '../../../interfaces/gamesInterfaces';

interface CarouselScreenshotsProps {
  title: string;
  screenshots: Poster[];
}

const settings = {
  className: 'carousel-screenshots',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  swipeToSlider: true,
};

const CarouselScreenshots = ({
  title,
  screenshots,
}: CarouselScreenshotsProps) => {
  return (
    <Slider {...settings}>
      {map(screenshots, (screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.url}
          alt={screenshot.name}
          onClick={() => console.log('abrir imagen')}
        />
      ))}
    </Slider>
  );
};

export default CarouselScreenshots;
