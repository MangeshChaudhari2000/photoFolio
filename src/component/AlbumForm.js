import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';



const AlbumForm = ({ addAlbum, setIsVisible }) => {
  const albumTextRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addAlbum({ "albumName": albumTextRef.current.value });
    setIsVisible(false);
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg mx-auto my-8 max-w-md">
      <h1 className="text-2xl font-semibold mb-4 text-center">Create an album</h1>
      <form className="flex items-center space-x-4" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Album Name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={albumTextRef}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AlbumForm;
