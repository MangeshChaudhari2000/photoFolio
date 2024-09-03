import React, { useEffect } from 'react'
import { useState } from 'react';
import ImageForm from './ImageForm';
import carousel from './carousel';
import AlbumList from './AlbumList';
import App from '../App';
const ImageList = ({ personalImageAlbum, updatePeronalAlbum }) => {
  const [isImageFormVisible, setIsImageFormVisible] = useState(false);
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  // useEffect(() => {

  // }, personalImageAlbum)

  const togglePopup = () => {
    setIsImageFormVisible(!isImageFormVisible);
  };

  const handleBackButtonClick = () => {
    // console.log("Back button clicked");

    // window.history.go(-1);
    return (
      <App />
    )
  };

  const deleteImageLocal = (i) => {
    personalImageAlbum.imageArray1.splice(i, 1);
    updatePeronalAlbum(personalImageAlbum)
  }

  const editImageLocal = (i) => {
    setIsImageFormVisible(true);
  }
  console.log("inside ImageList personalImageAlbum: ", personalImageAlbum);

  return (
    <>

      {isImageFormVisible && <ImageForm images={personalImageAlbum} setIsImageFormVisible={setIsImageFormVisible} updatePeronalAlbum={updatePeronalAlbum} />}

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
                      // onClick={() => handleAlbumClick(data)}
                      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white cursor-pointer"
                      onMouseOver={() => {
                        setCurrentHoverIndex(i);
                      }}
                      onMouseLeave={() => {
                        setCurrentHoverIndex(null);
                      }}
                    >
                      <img
                        className="w-60"
                        src={data.imageUrl}
                        alt="album image"
                      />
                      <div className='flex justify-between items-center gap-4'>
                        <h2 className='text-2xl font-semibold ml-4'>{data.imageTitle}</h2>
                        {(currentHoverIndex === i) ?
                          <div className='flex gap-2'>
                            <button className='w-10 ' onClick={()=>editImageLocal(i)}>
                              <img src="https://cdn-icons-gif.flaticon.com/8800/8800862.gif" height="100%" alt="Edit" />
                            </button>
                            <button onClick={() => deleteImageLocal(i)} className='w-10'>
                              <img src="https://cdn-icons-gif.flaticon.com/15164/15164888.gif" height="100%" alt="Delete" />
                            </button>
                          </div> : <></>}
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