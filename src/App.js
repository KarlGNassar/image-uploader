import React from 'react'
import './App.css';
import mountain from './images/image.svg'

function App() {
  return (
    <div className="app">
      <div className="app__card">
        <h1>Upload your image</h1>
        <p className="app__cardSub">File should be Jpeg, Png,...</p>
        <div className="app__uploader">
          <img src={mountain} alt="illustration"/>
          <p>Drag & Drop your image here</p>
        </div>
        <p className="app__cardOr">Or</p>
        <button>Choose a file</button>
      </div>
    </div>
  );
}

export default App;
