import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import useFirestore from '../hooks/useFirestore';


const Modal = ({ selectedImg, setSelectedImg, imageIndex, setImageIndex }) => {
    
    const { docs } = useFirestore('images');
    const [ buttonClicked, setButtonClicked ] = useState(false);

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    }

    // Navigation
    const prevImage = () => {
        setImageIndex(prev => prev - 1); 
        setButtonClicked(true);
        
    }
    
    const nextImage = () => {    
        setImageIndex(prev => prev + 1); 
        setButtonClicked(true);
    }

    useEffect(() => {
        if (buttonClicked){
            setSelectedImg(docs[imageIndex].url)
            setButtonClicked(false);
        };
    }, [buttonClicked])


    return (
        <motion.div className='backdrop' onClick={handleClick}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
        >

           { imageIndex !== 0 && <FaChevronCircleLeft className='modal-navigation left' onClick={prevImage} /> }

            <motion.img src={selectedImg} alt='enlarged pic' 
            initial={{ y: '-100vh'}}
            animate={{ y: 0 }}
            />

           { imageIndex !== docs.length - 1 && <FaChevronCircleRight className='modal-navigation right'  onClick={nextImage}/> }
            
               
        </motion.div>
    )
}

export default Modal;