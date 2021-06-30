import React, { useState } from 'react';
import { Image, Modal } from 'semantic-ui-react';
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
  const [showModal, setShowModal] = useState(false);
  const [urlImage, setUrlImage] = useState('');

  const openImage = (url: string) => {
    setUrlImage(url);
    setShowModal(true);
  };

  return (
    <>
      <Slider {...settings}>
        {map(screenshots, (screenshot) => (
          <Image
            key={screenshot.id}
            src={screenshot.url}
            alt={screenshot.name}
            onClick={() => openImage(screenshot.url)}
          />
        ))}
      </Slider>
      <Modal open={showModal} onClose={() => setShowModal(false)} size="large">
        <Image src={urlImage} alt={title} />
      </Modal>
    </>
  );
};

export default CarouselScreenshots;
