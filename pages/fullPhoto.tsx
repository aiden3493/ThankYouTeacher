import styled from "../styles/fullPhoto.module.css";
import Navbar from "../components/Navbar";
import PhotoGallery from "../components/PhotoGallery";
import { motion } from "framer-motion";
import { useState } from "react";

function fullPhoto() {
  return (
    <>
      <div className={styled.main}>
        <motion.div className={styled.PhotoGallerys}>
          <PhotoGallery name='강민재' />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
        </motion.div>
        <motion.div className={styled.PhotoGallerys}>
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
        </motion.div>
        <motion.div className={styled.PhotoGallerys}>
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
        </motion.div>
        <motion.div className={styled.PhotoGallerys}>
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
          <PhotoGallery />
        </motion.div>
      </div>
    </>
  );
}

export default fullPhoto;
