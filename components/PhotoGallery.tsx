import { motion } from "framer-motion";
import { useState } from "react";
import styled from "../styles/fullPhoto.module.css";

function PhotoGallery({ name, width, height }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      style={{ width: width, height: height }}
      layout
      className={styled.PhotoGallery}
      onClick={() => setIsOpen(!isOpen)}>
      <h1 key='gallery-title'>{name}</h1>
    </motion.div>
  );
}

export default PhotoGallery;

PhotoGallery.defaultProps = {
  width: "150px",
  height: "150px",
};
