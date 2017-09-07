import React from 'react';
import WithSrc from './WithSrc';
import Carousel from '../components/carousel/carousel';
import Slide from '../components/carousel/slide';

var DemoCarousel = function(props){
  let code = (<Carousel width="800px" height="350px">
                <Slide><p>First Slide</p></Slide>
                <Slide><p>Second Slide</p></Slide>
                <Slide><p>Third Slide</p></Slide>
              </Carousel>);

  let src = `<Carousel width="800px" height="350px">
                <Slide><p>First Slide</p></Slide>
                <Slide><p>Second Slide</p></Slide>
                <Slide><p>Third Slide</p></Slide>
              </Carousel>`;
  let demo = WithSrc.createDemo(code, src);


  let code2 = (<Carousel width="800px" height="500px">
                <Slide><img src="images/canada.jpg" /></Slide>
                <Slide><img src="images/landscape1.jpg" /></Slide>
                <Slide><img src="images/logs.jpg" /></Slide>
                <Slide><img src="images/sunrise.jpg" /></Slide>
              </Carousel>);

  let src2 = `<Carousel width="800px" height="500px">
                <Slide><img src="images/canada.jpg" /></Slide>
                <Slide><img src="images/landscape1.jpg" /></Slide>
                <Slide><img src="images/logs.jpg" /></Slide>
                <Slide><img src="images/sunrise.jpg" /></Slide>
              </Carousel>`;
  let demo2 = WithSrc.createDemo(code2, src2);
  return (
    <div>
      { demo }
      { demo2 }
    </div>);
}

export default DemoCarousel;
