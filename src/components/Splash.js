import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Splash = () => {

    const images = [
        {original:"https://i.imgur.com/ppqan5G.jpg"},
        {original:"https://c1.staticflickr.com/5/4403/36388952880_c9d523338f_o.jpg"}
    ]

    return(
    <div className="imageGallery">
        <div>
        <ImageGallery 
            items={images} 
            autoPlay={true} 
            showThumbnails={false} 
            showFullscreenButton={false}
            showPlayButton={false}
            slideInterval={5000}
        />
        </div>
        <div>
            loren ipsum text ehre for now i guess
        </div>
    </div>)
}

export default Splash;