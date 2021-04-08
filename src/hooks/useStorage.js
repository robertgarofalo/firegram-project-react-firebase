import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [ progress, setProgress ] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // Add image to storage
    useEffect(() => {
        //references
        const storageRef = projectStorage.ref(file.name); // creates a reference of the file being uploaded
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const fileName = file.name;
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({fileName, url, createdAt })
            setUrl(url);
        });
    }, [file])


    return { progress, url, error }

}

export default useStorage;


