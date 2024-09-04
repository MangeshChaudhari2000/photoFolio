import React, { useState, useEffect } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const CarouselComponent = ({ personalImageAlbum, setIsCarouselActive, currentImageIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(currentImageIndex);

  useEffect(() => {
    setSelectedIndex(currentImageIndex);
  }, [currentImageIndex]);

  const handleClose = () => {
    setIsCarouselActive(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <button 
        onClick={handleClose} 
        className="absolute top-4 right-4 bg-white border border-gray-300 rounded px-4 py-2 text-lg cursor-pointer shadow-md hover:bg-gray-100 transition"
      >
        Close Carousel
      </button>
      <div className="w-4/5 max-w-5xl">
        <ResponsiveCarousel 
          showThumbs={false} 
          autoPlay 
          infiniteLoop
          selectedItem={selectedIndex} // Set the initial selected item
          onChange={index => setSelectedIndex(index)} // Update the selected index when changed
        >
          {personalImageAlbum.imageArray1.map((image, index) => (
            <div key={index}>
              <img src={image.imageUrl} alt={image.imageTitle} className="w-full h-auto object-cover" />
            </div>
          ))}
        </ResponsiveCarousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
