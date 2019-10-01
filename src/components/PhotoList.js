import React from "react";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
