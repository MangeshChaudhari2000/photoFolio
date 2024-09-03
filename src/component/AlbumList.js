import React, { useState } from 'react';
import ImageList from './ImageList';
import AlbumForm from './AlbumForm';

const AlbumList = ({ allAlbums, addAlbum, updatePeronalAlbum ,deleteImage}) => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    console.log("qllqlbum", allAlbums);

    const togglePopup = () => {
        setIsVisible(!isVisible);
    };
    const handleAlbumClick = (imageListArray) => {
        setSelectedAlbum(imageListArray);
    };

    if (selectedAlbum) {
        return (
            <div>
                <ImageList personalImageAlbum={selectedAlbum} updatePeronalAlbum={updatePeronalAlbum}  deleteImage={deleteImage} />
            </div>
        );
    }

    return (
        <>
            <div className="p-5">

                {isVisible && <AlbumForm addAlbum={addAlbum} setIsVisible={setIsVisible} />}

                <div className="flex justify-around mt-4">
                    <h1 className="text-2xl font-semibold mb-4 text-center ">Your Albums</h1>

                    <div>
                        <button onClick={togglePopup}>
                            {isVisible ?
                                <button class=" rounded-full bg-red-100 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                                    Cancel
                                </button>
                                :
                                <button class=" rounded-full bg-blue-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Add Album
                                </button>
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-10 py-10'>
                <div className='flex flex-wrap gap-14'>
                    {allAlbums.map((data, i) => (
                        <div
                            key={i}
                            onClick={() => handleAlbumClick(data)}
                            className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                        >
                            <img
                                className="w-44"
                                src={(data.imageArray1) ?(data.imageArray1.length>0)?
                                     data.imageArray1[0].imageUrl : 
                                     "https://cdn-icons-gif.flaticon.com/14204/14204933.gif"
                                     :"https://cdn-icons-gif.flaticon.com/14204/14204933.gif"
                                    }
                                alt="album image"
                            />
                            <h2>{data.albumName}</h2>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default AlbumList;
