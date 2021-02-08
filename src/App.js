import React, { useState } from 'react'
import './App.css';
import Uploader from './components/Uploader/Uploader';

function App() {
  const [upload, setUpload] = useState(false)
  const toggleUpload = () => {
    setUpload(true)
  }

  console.log(upload)
  return (
    <div className="app">
      {
        (!upload) ? (
          <Uploader toggle={toggleUpload}/>
        ) : (
          <h1>hi</h1>
        )
      }
      
    </div>
  );
}

export default App;
