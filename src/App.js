import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { useState, useReducer } from "react";
import { doc, collection, addDoc, setDoc, getDocs, deleteDoc, onSnapshot } from "firebase/firestore";


import Navbar from "./component/Navbar";
import AlbumForm from "./component/AlbumForm";
import AlbumList from "./component/AlbumList";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "SET_ALBUMS": {
      return {
        albums: payload.albums
      };
    }

    case "GET_ALBUM": {
      return {
        albums: [payload.album, ...state.albums]
      };
    }

    case "UPDATE_PersonalAlbum": {
      const tempAlbum = state.albums;
      tempAlbum[payload.albumPos] = payload.data;
      return {
        albums: tempAlbum
      };
    }

    case "REMOVE_Image": {
      return {
        albums: state.albums.filter((data) => data.id !== payload.id)
      };
    }
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { albums: [] });



  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "photoFolio"), (snapshot) => {
      const tempAlbums = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: "SET_ALBUMS",
        payload: { albums: tempAlbums }
      });
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  const addAlbum = async (data) => {
    const photoFolioRef = collection(db, "photoFolio");
    const docRef = await addDoc(photoFolioRef, data);

    dispatch({
      type: "ADD_ALBUM",
      payload: { album: { id: docRef.id, ...data } }
    });
    toast.success("album added successfully.");
  };

  const updatePeronalAlbum = async (data) => {
    console.log("updatePeronalAlbum",data);
    
    const albumPos = state.albums.findIndex(doc => doc.id === data.id);
    if (albumPos === -1) {
      return false;
    }

    const albumRef = doc(db, "photoFolio", data.id);
    await setDoc(albumRef, data);

    dispatch({ type: "UPDATE_PersonalAlbum", payload: { albumPos, data } });
    toast.success("Album updated successfully.");
  };

  const deleteImage = async (albumID,id) => {
    // delete expense from firestore here
    const albumPos = state.albums.findIndex(doc => doc.id === albumID);
    if (albumPos === -1) {
      return false;
    }    
    // await deleteDoc(docRef);

    // dispatch({ type: "REMOVE_Image", payload: { id } });
    // toast.success("Image deleted successfully.");
  };


  console.log("state.albums", state.albums);

  return (

    <>
      <Navbar />

      <AlbumList allAlbums={state.albums} addAlbum={addAlbum} updatePeronalAlbum={updatePeronalAlbum} deleteImage={deleteImage} />
      <ToastContainer />

    </>
  )
}

