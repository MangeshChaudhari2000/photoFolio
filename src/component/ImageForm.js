import React, { useRef } from 'react';

const ImageForm = ({ setIsImageFormVisible, images, updatePeronalAlbum }) => {
    const imageTitleRef = useRef();
    const imageUrlRef = useRef();

    console.log(images);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const imageTitle = imageTitleRef.current.value;
        const imageUrl = imageUrlRef.current.value;
        if (images.imageArray1) {
            const updatedImageArray = images.imageArray1.push({ "imageTitle": imageTitle, "imageUrl": imageUrl })
            updatePeronalAlbum(images)
        } else {
            images.imageArray1 = [{ "imageTitle": imageTitle, "imageUrl": imageUrl }];
            updatePeronalAlbum(images)

        }
        setIsImageFormVisible(false);
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg mx-auto my-8 w-3/4">
            <h1 className="text-2xl font-semibold mb-4 text-center">Create an album</h1>
            <form className="flex flex-col md:flex-row md:space-x-4" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="Enter Image Title"
                    className="flex-1 px-3 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={imageTitleRef}
                />
                <input
                    type="text"
                    placeholder="Enter Image URL"
                    className="flex-1 px-3 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={imageUrlRef}
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

export default ImageForm;
