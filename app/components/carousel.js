'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



export default function Carousel() {
 return(
    <div>
        <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
/>
    </div>
 ); 
}