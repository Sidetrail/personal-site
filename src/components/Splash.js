import React from 'react';
import { Carousel } from 'react-bootstrap';

const Splash = () => {
  const images = [
    { original: 'https://i.imgur.com/ppqan5G.jpg' },
    {
      original:
        'https://c1.staticflickr.com/5/4403/36388952880_c9d523338f_o.jpg',
    },
  ];

  return (
    <div className="imageGallery">
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/ppqan5G.jpg"
              className="slideShowPicture"
            />
            <Carousel.Caption>
              <h3>First slide dl</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://c1.staticflickr.com/5/4403/36388952880_c9d523338f_o.jpg"
              className="slideShowPicture"
            />
            <Carousel.Caption>
              <h3>Second slide dl</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://i.imgur.com/ppqan5G.jpg"
              className="slideShowPicture"
            />
            <Carousel.Caption>
              <h3>Third slide dl</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>loren ipsum text ehre for now i guess test</div>
    </div>
  );
};

export default Splash;
