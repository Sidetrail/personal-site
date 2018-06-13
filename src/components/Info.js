import React from 'react';

const Info = () => (
  <div>
    <div className="infoIntroContainer">
      <div className="infoPicture">pic</div>
      <div>
        <dl htmlFor="name" className="infoNameTitle">
          John Williams
        </dl>
        <dl className="infoIntroText">Intro text</dl>
      </div>
    </div>
    <div>
      <div>
        <dl>Videos</dl>
        <dl>Video text</dl>
      </div>
      <div>
        <dl>Programming</dl>
        <dl>coding text</dl>
      </div>
      <div>
        <dl>Pictures</dl>
        <dl>picture text</dl>
      </div>
    </div>
  </div>
);

export default Info;
