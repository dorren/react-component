import React from 'react';
import WithSrc from './WithSrc';
import Carousel from '../components/carousel/carousel';
import Slide from '../components/carousel/slide';

var DemoCarousel = function(props){
  let code = (<Carousel className="carousel1">
                <Slide><p>First Slide</p></Slide>
                <Slide><p>Second Slide</p></Slide>
                <Slide><p>Third Slide</p></Slide>
              </Carousel>);

  let src = `<Carousel className="carousel1">
                <Slide><p>First Slide</p></Slide>
                <Slide><p>Second Slide</p></Slide>
                <Slide><p>Third Slide</p></Slide>
              </Carousel>`;
  let demo = WithSrc.createDemo(code, src);

  let code2 = (<Carousel className="carousel2">
                <Slide><img src={`${process.env.PUBLIC_URL}/images/canada.jpg`} alt=""/></Slide>
                <Slide><img src={`${process.env.PUBLIC_URL}/images/landscape1.jpg`} alt=""/></Slide>
                <Slide><img src={`${process.env.PUBLIC_URL}/images/logs.jpg`} alt=""/></Slide>
                <Slide><img src={`${process.env.PUBLIC_URL}/images/sunrise.jpg`} alt=""/></Slide>
              </Carousel>);

  let src2 = `<Carousel className="carousel2">
                <Slide><img src="/images/canada.jpg" alt=""/></Slide>
                <Slide><img src="/images/landscape1.jpg" alt=""/></Slide>
                <Slide><img src="/images/logs.jpg" alt=""/></Slide>
                <Slide><img src="/images/sunrise.jpg" alt=""/></Slide>
              </Carousel>`;
  let demo2 = WithSrc.createDemo(code2, src2);
  return (
    <div>
      { demo }
      { demo2 }
    </div>);
}

export default DemoCarousel;
