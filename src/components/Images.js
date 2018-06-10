import React from 'react';

const Images = () => {
  const images = [];

  return (
    <div>
      <div className="imagepageHeader" />
      <div className="featuredImageContainer">
        <div className="featuredText">
          <label className="featuredTextTitle">some title text</label>
          <label className="featuredTextBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sollicitudin at risus eget convallis. Quisque bibendum orci ligula,
            ut dictum leo tristique in. Curabitur eget nibh aliquam libero
            viverra interdum. Quisque elementum lobortis odio nec dictum.
            Vivamus pretium a odio non fringilla. Morbi eu mi venenatis, tempor
            odio eu, lobortis nisi. Suspendisse ullamcorper ipsum vitae leo
            hendrerit sollicitudin. Curabitur tortor diam, vehicula at faucibus
            quis, feugiat ut sapien. Nunc eu volutpat mauris. Nullam molestie ac
            magna porta placerat. Integer faucibus facilisis orci, vel facilisis
            nulla commodo quis. Nulla id libero nunc. Proin laoreet erat ac
            mauris accumsan, vitae tincidunt justo consectetur. Donec lacus
            ligula, viverra eget lectus a, pellentesque auctor dui. Vestibulum
            sit amet metus elit. Ut ac ligula faucibus, egestas lorem et,
            pulvinar dolor. Quisque velit sapien, venenatis eleifend dui ac,
            fermentum iaculis lacus. Praesent maximus turpis at libero congue
            consectetur. Aenean vitae eros ac mauris malesuada sollicitudin.
            Suspendisse et nulla ut mauris laoreet gravida. Nullam vel nisl
            vitae justo eleifend rutrum imperdiet eget eros.
          </label>
        </div>
        <div className="featuredImage">
          <img
            src="https://c1.staticflickr.com/5/4403/36388952880_c9d523338f_o.jpg"
            className="slideShowPicture"
          />
        </div>
      </div>
      <div className="imageGalleries">{images}</div>
    </div>
  );
};

export default Images;
