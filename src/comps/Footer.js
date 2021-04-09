import React from 'react';
import { motion } from 'framer-motion';


const Footer = () => {
    return (
        <motion.div 
        className='footer'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ delay: 1 }}>
            <hr></hr>
            <h4>Created by Robert Garofalo</h4>
            <h4><a href='https://www.instagram.com/learnsicilian' target='_blank'>Learn Sicilian</a></h4>
            
        </motion.div>
    )
}

export default Footer
