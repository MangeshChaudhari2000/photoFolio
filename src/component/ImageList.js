import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from "./Carousel"

import ImageForm from './ImageForm';


import AlbumList from './AlbumList';
import App from '../App';
const ImageList = ({ personalImageAlbum, updatePeronalAlbum }) => {
  const [isImageFormVisible, setIsImageFormVisible] = useState(false);
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Track the image data to be edited
  const [isCarouselActive, setIsCarouselActive] = useState(false);



  const togglePopup = () => {
    setIsImageFormVisible(!isImageFormVisible);
    setCurrentImageIndex(null)
  };

  const handleBackButtonClick = () => {
    // console.log("Back button clicked");
    window.history.go(-1);

  };

  const handleCrousel = (i) => {
    setIsCarouselActive(true)
    setCurrentImageIndex(i);

  }

  const deleteImageLocal = (i) => {
    personalImageAlbum.imageArray1.splice(i, 1);
    updatePeronalAlbum(personalImageAlbum)
  }

  const editImageLocal = (i) => {
    setCurrentImageIndex(i); // Set image data to be edited
    setIsImageFormVisible(true);
  };

  console.log("inside ImageList personalImageAlbum: ", personalImageAlbum);

  return (
    <>

      {isImageFormVisible &&
        <ImageForm
          currentImageIndex={currentImageIndex}
          images={personalImageAlbum}
          setIsImageFormVisible={setIsImageFormVisible}
          updatePeronalAlbum={updatePeronalAlbum}
        />}

      {
        isCarouselActive && <Carousel personalImageAlbum={personalImageAlbum} currentImageIndex={currentImageIndex} setIsCarouselActive={setIsCarouselActive} />
      }
      <div className="flex justify-around mt-4 items-center">
        <div className='inline-flex gap-8 items-center'>
          <button onClick={handleBackButtonClick}><img
            className='w-16'
            src='https://cdn-icons-gif.flaticon.com/16046/16046459.gif'
            alt='Album cover'
          /></button>

          <h1 className="capitalize truncate font-semibold text-blue-800 text-4xl mb-4 text-center">
            {personalImageAlbum.albumName}
          </h1>
        </div>


        <div>
          <button onClick={togglePopup}>
            {isImageFormVisible ?
              <button class=" rounded-full bg-red-100 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Cancel
              </button>
              :
              <button class=" rounded-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add Image
              </button>
            }
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center m-auto'>
        {

          (personalImageAlbum.imageArray1) ?
            (personalImageAlbum.imageArray1.length > 0) ?
              <div className='px-10 py-10'>
                <div className='flex flex-wrap gap-14'>
                  {personalImageAlbum.imageArray1.map((data, i) => (
                    <div
                      key={i}
                      className="relative max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white cursor-pointer"
                      onMouseOver={() => setCurrentHoverIndex(i)}
                      onMouseLeave={() => setCurrentHoverIndex(null)}

                    >
                      <img
                        className="w-full h-auto object-cover"
                        src={data.imageUrl}
                        alt="album image"
                        onClick={() => handleCrousel(i)}
                      />
                      {currentHoverIndex === i && (
                        <div className="absolute bottom-2 right-2 bg-white bg-opacity-75 p-2 rounded-lg flex gap-2">
                          <button
                            className="w-10 h-10 "
                            onClick={() => editImageLocal(i)}

                          >
                            <img
                              src="https://cdn-icons-gif.flaticon.com/8800/8800862.gif"
                              className="w-full h-full object-cover"
                              alt="Edit"
                            />
                          </button>
                          <button
                            className="w-10 h-10"
                            onClick={() => deleteImageLocal(i)}
                          >
                            <img
                              src="https://cdn-icons-gif.flaticon.com/15164/15164888.gif"
                              className="w-full h-full object-cover"
                              alt="Delete"

                            />
                          </button>
                        </div>
                      )}
                      <div className='flex justify-between items-center gap-4 p-4'>
                        <h2 className='text-2xl font-semibold'>{data.imageTitle}</h2>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              :
              <div
                className='w-1/2 h-40 bg-gray-200 flex justify-center items-center rounded-lg font-bold text-3xl'
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNB930nDq8s5jRpkQEkI--bFRzNOGfxuHXw&s')`
                }}
              >
                <h1>No Image Present</h1>
              </div>

            : <div className='w-1/2 h-40 bg-gray-200'>
              <h1 >No Image Present</h1>
            </div>
        }
      </div>
    </>
  )
}

export default ImageList