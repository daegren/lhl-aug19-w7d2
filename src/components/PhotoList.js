import React from "react";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos }) => {
  return (
    <ul>
      {photos.length === 0 && (
        <div>There are no photos, consider adding some</div>
      )}
      {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default PhotoList;
