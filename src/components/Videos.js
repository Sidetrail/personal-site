import React from 'react';

const getVideos = () => {};

const Videos = () => {
  getVideos();
  return (
    <div>
      <div className="featuredVideoContainer">
        <div className="featuredVideo">featured video</div>
        <div className="featuredVideoDesc">featured video desc</div>
      </div>
      <div className="videoList">last few videos</div>
    </div>
  );
};

export default Videos;
