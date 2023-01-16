import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../carouselData';
import { CarouselProps } from '../../typings';

export const CarouselComp = ({ children }: CarouselProps) => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass="carousel-item-padding-40-px"
      centerMode={true}
    >
      {children}
    </Carousel>
  );
};

export default CarouselComp;
