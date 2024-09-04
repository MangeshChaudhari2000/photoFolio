import React, { useEffect, useRef, useState } from 'react';

const ImageForm = ({ setIsImageFormVisible, images, updatePeronalAlbum, currentImageIndex }) => {


    const [imageTitleState, setImageTitleState] = useState("");
    const [imageUrlState, setImageUrlState] = useState("");

    console.log("currentImageIndex", currentImageIndex);

    console.log(images);

    useEffect(() => {
        if (currentImageIndex !== null) {
            console.log("mounted form for edit");

            const imageTitleRef = images.imageArray1[currentImageIndex].imageTitle;
            const imageUrlRef = images.imageArray1[currentImageIndex].imageUrl;
            setImageTitleState(imageTitleRef);
            setImageUrlState(imageUrlRef)
        }
    }, [currentImageIndex, images.imageArray1])


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (currentImageIndex !== null) {
            images.imageArray1[currentImageIndex].imageTitle = imageTitleState;
            images.imageArray1[currentImageIndex].imageUrl = imageUrlState;
            updatePeronalAlbum(images)
            setIsImageFormVisible(false);
            return;
        } else if (images.imageArray1) {
            const updatedImageArray = images.imageArray1.push({ "imageTitle": imageTitleState, "imageUrl": imageUrlState })
            updatePeronalAlbum(images)
        } else {
            images.imageArray1 = [{ "imageTitle": imageTitleState, "imageUrl": imageUrlState }];
            updatePeronalAlbum(images)
        }
        setIsImageFormVisible(false);
    }

    return (
        <div className="bg-gray-100 p-4 rounded-lg mx-auto my-8 w-3/4">
            <h1 className="text-2xl font-semibold mb-4 text-center">
                {(currentImageIndex !== null) ? "Edit an Image" : "Create an Image"}
            </h1>
            <form className="flex flex-col md:flex-row md:space-x-4" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder={currentImageIndex ? images.imageArray1[currentImageIndex].imageTitle : "Enter Image Title"}
                    className="flex-1 px-3 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={imageTitleState}
                    onChange={(e) => setImageTitleState(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder={currentImageIndex ? images.imageArray1[currentImageIndex].imageUrl : "Enter Image URL"}
                    className="flex-1 px-3 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={imageUrlState}
                    onChange={(e) => setImageUrlState(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {(currentImageIndex !== null) ? "Submit Changes" : "Submit"}

                </button>
            </form>
        </div>
    );
}

export default ImageForm;
