import { motion } from "framer-motion";
import styled from "../styles/photos.module.css";
import Image from "next/image";

function Photo(props: any) {
  return (
    <motion.div className={styled.photo}>
      <Image
        alt={`${props.ImageSrc}`}
        key='photo-img'
        src={props.ImageSrc}
        className={styled.photo}
      />
    </motion.div>
  );
}
export default Photo;
