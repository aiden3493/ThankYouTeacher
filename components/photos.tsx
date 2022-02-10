import Link from "next/link";
import styled from "../styles/photos.module.css";
import Photo from "./photo";
import photo from "../public/test.png";
import photo2 from "../public/test2.png";
import photo3 from "../public/test3.png";
import photo4 from "../public/test4.png";
import photo5 from "../public/test5.png";
import photo6 from "../public/test6.png";
import photo7 from "../public/test7.png";
import photo8 from "../public/test8.png";
import photo9 from "../public/test9.png";
import photo10 from "../public/test10.png";
import { motion } from "framer-motion";

function Photos() {
  return (
    <div className={styled.photosSection}>
      <h1 key='photos-title'>우리들의 추억</h1>
      <motion.div className={styled.photos} key='photos-div'>
        <motion.div
          key='photos-1'
          className={styled.photos}
          initial={{ x: 1550 }}
          animate={{ x: -1950 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo} key='photos-photo-1' />
          <Photo ImageSrc={photo2} key='photos-photo-2' />
          <Photo ImageSrc={photo3} key='photos-photo-3' />
          <Photo ImageSrc={photo4} key='photos-photo-4' />
          <Photo ImageSrc={photo5} key='photos-photo-5' />
          <Photo ImageSrc={photo6} key='photos-photo-6' />
          <Photo ImageSrc={photo7} key='photos-photo-7' />
          <Photo ImageSrc={photo8} key='photos-photo-8' />
          <Photo ImageSrc={photo9} key='photos-photo-9' />
          <Photo ImageSrc={photo10} key='photos-photo-10' />
        </motion.div>
        <motion.div
          key='photos-1-2'
          className={styled.photos}
          initial={{ x: 1550 }}
          animate={{ x: -1950 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo} key='photos-photo-2-1' />
          <Photo ImageSrc={photo2} key='photos-photo-2-2' />
          <Photo ImageSrc={photo3} key='photos-photo-2-3' />
          <Photo ImageSrc={photo4} key='photos-photo-2-4' />
          <Photo ImageSrc={photo5} key='photos-photo-2-5' />
          <Photo ImageSrc={photo6} key='photos-photo-2-6' />
          <Photo ImageSrc={photo7} key='photos-photo-2-7' />
          <Photo ImageSrc={photo8} key='photos-photo-2-8' />
          <Photo ImageSrc={photo9} key='photos-photo-2-9' />
          <Photo ImageSrc={photo10} key='photos-photo-2-10' />
        </motion.div>
      </motion.div>

      <motion.div className={styled.photos} key='photos-div2'>
        <motion.div
          key='photos-2'
          className={styled.photos}
          initial={{ x: 1350 }}
          animate={{ x: -1750 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo5} key='photos-photo-11' />
          <Photo ImageSrc={photo3} key='photos-photo-12' />
          <Photo ImageSrc={photo2} key='photos-photo-13' />
          <Photo ImageSrc={photo6} key='photos-photo-14' />
          <Photo ImageSrc={photo9} key='photos-photo-15' />
          <Photo ImageSrc={photo4} key='photos-photo-16' />
          <Photo ImageSrc={photo} key='photos-photo-17' />
          <Photo ImageSrc={photo8} key='photos-photo-18' />
          <Photo ImageSrc={photo7} key='photos-photo-19' />
          <Photo ImageSrc={photo10} key='photos-photo-20' />
        </motion.div>
        <motion.div
          key='photos-2-2'
          className={styled.photos}
          initial={{ x: 1350 }}
          animate={{ x: -1750 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo5} key='photos-photo-2-11' />
          <Photo ImageSrc={photo3} key='photos-photo-2-12' />
          <Photo ImageSrc={photo2} key='photos-photo-2-13' />
          <Photo ImageSrc={photo6} key='photos-photo-2-14' />
          <Photo ImageSrc={photo9} key='photos-photo-2-15' />
          <Photo ImageSrc={photo4} key='photos-photo-2-16' />
          <Photo ImageSrc={photo} key='photos-photo-2-17' />
          <Photo ImageSrc={photo8} key='photos-photo-2-18' />
          <Photo ImageSrc={photo7} key='photos-photo-2-19' />
          <Photo ImageSrc={photo10} key='photos-photo-2-20' />
        </motion.div>
      </motion.div>

      <motion.div className={styled.photos} key='photos-div3'>
        <motion.div
          key='photos-3'
          className={styled.photos}
          initial={{ x: 1450 }}
          animate={{ x: -1850 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo9} key='photos-photo-21' />
          <Photo ImageSrc={photo3} key='photos-photo-22' />
          <Photo ImageSrc={photo10} key='photos-photo-23' />
          <Photo ImageSrc={photo2} key='photos-photo-24' />
          <Photo ImageSrc={photo} key='photos-photo-25' />
          <Photo ImageSrc={photo8} key='photos-photo-26' />
          <Photo ImageSrc={photo5} key='photos-photo-27' />
          <Photo ImageSrc={photo7} key='photos-photo-28' />
          <Photo ImageSrc={photo4} key='photos-photo-29' />
          <Photo ImageSrc={photo6} key='photos-photo-30' />
        </motion.div>
        <motion.div
          className={styled.photos}
          initial={{ x: 1450 }}
          animate={{ x: -1850 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo9} key='photos-photo-2-21' />
          <Photo ImageSrc={photo3} key='photos-photo-2-22' />
          <Photo ImageSrc={photo10} key='photos-photo-2-23' />
          <Photo ImageSrc={photo2} key='photos-photo-2-24' />
          <Photo ImageSrc={photo} key='photos-photo-2-25' />
          <Photo ImageSrc={photo8} key='photos-photo-2-26' />
          <Photo ImageSrc={photo5} key='photos-photo-2-27' />
          <Photo ImageSrc={photo7} key='photos-photo-2-28' />
          <Photo ImageSrc={photo4} key='photos-photo-2-29' />
          <Photo ImageSrc={photo6} key='photos-photo-2-10' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photos;
