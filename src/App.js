import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";
import FromNow from "./components/FromNow";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then(resp => resp.json())
  //     .then(photos => setPhotos(photos));
  // }, []);

  return (
    <div className="App">
      <h1>useEffect Demo</h1>
      {/* Part 1 */}
      {/* <PhotoList photos={photos} /> */}

      {/* Part 2 */}
      <FromNow date={date} />
      <button onClick={() => setDate(new Date())}>Reset Date</button>
    </div>
  );
};

export default App;
