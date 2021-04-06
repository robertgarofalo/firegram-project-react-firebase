import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=vUe91uOx7R0&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=27&t=195s
// 43:24: PROGRESS BAR