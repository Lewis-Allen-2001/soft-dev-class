"use client";

import { motion } from "framer-motion";

export default function MyComponent() {
  return (
    <div> 
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
      <h1>How much wood could a woodchuck chuck
If a woodchuck could chuck wood?
As much wood as a woodchuck could chuck,
If a woodchuck could chuck wood.</h1>
    </motion.div>
    </div>
  );
}