import React, { useState, useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import { FaTrashAlt } from "react-icons/fa";



const ImageGrid = ({ setSelectedImg, imageIndex, setImageIndex, setFileToDelete, setDocIdToDelete }) => {
   const { docs } = useFirestore('images');
    console.log('current docs', docs)

    const imgDeleteHandler = (fileName, id) => {
        setFileToDelete(fileName);
        setDocIdToDelete(id);
    }

    const clickHandler = (url, index) => {
    setSelectedImg(url);
    setImageIndex(index);
    
    }

    return (
        <div className='img-grid'>
            { docs && docs.map((doc, index) => (
                <motion.div className='img-wrap' key={doc.id}
                layout
                whileHover={{ opacity: 1 }} 
                // whileTap={{ scale: 0.9 }}
                >
                    <FaTrashAlt className='delete' onClick={() => imgDeleteHandler(doc.fileName, doc.id)}/>

                    <motion.img src={doc.url} alt='uploaded pic' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1 }}
                    onClick={() => clickHandler(doc.url, index)}
                    />

                    
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;