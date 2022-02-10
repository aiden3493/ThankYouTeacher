import { motion } from "framer-motion";
import styled from "../styles/photos.module.css";
import Image from "next/image";

function photo(props: any) {
  return (
    <motion.div className={styled.photo}>
      <Image key='photo-img' src={props.ImageSrc} className={styled.photo} />
    </motion.div>
  );
}
export default photo;
