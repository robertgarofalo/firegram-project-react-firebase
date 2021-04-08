import React, { useState, useEffect } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { projectStorage, projectFirestore } from './firebase/config';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);

  const [deleteClicked, setDeleteClicked] = useState(false);
  const [fileToDelete, setFileToDelete] = useState(null);
  const [docIdToDelete, setDocIdToDelete] = useState(null);


  // Delete the image
  useEffect(() => {
    if(fileToDelete){

        let storageRef = projectStorage.ref();
        let imgName = storageRef.child(fileToDelete);

        imgName.delete().then(() => {
            // console.log(fileToDelete + ' has now been deleted')
            // selectedImg(null);
        }).catch((error) => {
        console.log(error);
        });

    }
}, [fileToDelete])

// Delete the document
      useEffect(() => {
        if(docIdToDelete){
        projectFirestore.collection("images").doc(docIdToDelete).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.log(error);
        });
      }
   
      }, [docIdToDelete])



  return (
    <div className="App">
      <Title/>
      <UploadForm fileToDelete={fileToDelete} setFileToDelete={setFileToDelete} deleteClicked={deleteClicked} />
      <ImageGrid setSelectedImg={setSelectedImg} imageIndex={imageIndex} setImageIndex={setImageIndex} setFileToDelete={setFileToDelete} setDocIdToDelete={setDocIdToDelete}/>
      { selectedImg && <Modal selectedImg={selectedImg} 
                              setSelectedImg={setSelectedImg} 
                              imageIndex={imageIndex} 
                              setImageIndex={setImageIndex} 
                              /> }
    </div>
  );
}

export default App;