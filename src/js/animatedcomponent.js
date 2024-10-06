import React from 'react';
import { motion } from 'framer-motion';

function AnimatedComponent() {
  // Define the container variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the children animations by 0.3 seconds
      },
    },
  };

  // Define the item variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container black-box"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="item" variants={itemVariants}>
        <h1>Item 1</h1>
      </motion.div>
      <motion.div className="item" variants={itemVariants}>
        <h1>Item 2</h1>
      </motion.div>
      <motion.div className="item" variants={itemVariants}>
        <h1>Item 3</h1>
      </motion.div>
    </motion.div>
  );
}

export default AnimatedComponent;