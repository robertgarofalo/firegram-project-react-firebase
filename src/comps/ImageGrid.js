import React, { useEffect } from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';



const ImageGrid = ({ setSelectedImg, imageIndex, setImageIndex }) => {
   const { docs } = useFirestore('images');
    console.log('current docs', docs)

    
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
                whileTap={{ scale: 0.9 }}
                onClick={() => clickHandler(doc.url, index)}
                >
                    <motion.img src={doc.url} alt='uploaded pic' 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            )) }
        </div>
    )
}

export default ImageGrid;