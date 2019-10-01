import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(resp => resp.json())
      .then(photos => setPhotos(photos));
  }, []);

  return (
    <div className="App">
      <h1>Web API Demo</h1>
      <PhotoList photos={photos} />
    </div>
  );
};

export default App;
