import { motion } from "framer-motion";
import styled from "../styles/photos.module.css";
import Photo from "./photo";
import photo1 from "../public/image1.png";
import photo2 from "../public/image2.jpg";
import photo3 from "../public/image3.jpg";
import photo4 from "../public/image4.jpg";
import photo5 from "../public/image5.jpg";
import photo6 from "../public/image6.jpg";
import photo7 from "../public/image7.jpg";
import photo8 from "../public/image8.png";
import photo9 from "../public/image9.jpg";
import photo10 from "../public/image10.jpg";
import photo11 from "../public/image11.jpg";
import photo12 from "../public/image12.jpg";
import photo13 from "../public/image13.jpg";
import photo14 from "../public/image14.jpg";
import photo15 from "../public/image15.jpg";
import photo16 from "../public/image16.jpg";
import photo17 from "../public/image17.png";
import photo18 from "../public/image18.png";
import photo19 from "../public/image19.jpg";
import photo20 from "../public/image20.jpg";
import photo21 from "../public/image21.jpg";
import photo22 from "../public/image22.jpeg";
import photo23 from "../public/image23.jpg";
import photo24 from "../public/image24.png";
import photo25 from "../public/image25.jpg";
import photo26 from "../public/image26.jpg";
import photo27 from "../public/image27.jpg";
import photo28 from "../public/image28.jpg";
import photo29 from "../public/image29.jpg";
import photo30 from "../public/image30.png";

function Photos() {
  return (
    <div className={styled.photosSection}>
      <h1 key='photos-title'>우리들의 추억</h1>
      <motion.div className={styled.photos} key='photos-div'>
        <motion.div
          key='photos-1'
          className={styled.photos}
          initial={{ x: 1550 }}
          animate={{ x: -1750 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo1} key='photos-photo-1' />
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
          animate={{ x: -1750 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo1} key='photos-photo-2-1' />
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

      <motion.div className={styled.photos} key='photos-div'>
        <motion.div
          key='photos-1'
          className={styled.photos}
          initial={{ x: 1450 }}
          animate={{ x: -1850 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo11} key='photos-photo-2-1' />
          <Photo ImageSrc={photo12} key='photos-photo-2-2' />
          <Photo ImageSrc={photo13} key='photos-photo-2-3' />
          <Photo ImageSrc={photo14} key='photos-photo-2-4' />
          <Photo ImageSrc={photo15} key='photos-photo-2-5' />
          <Photo ImageSrc={photo16} key='photos-photo-2-6' />
          <Photo ImageSrc={photo17} key='photos-photo-2-7' />
          <Photo ImageSrc={photo18} key='photos-photo-2-8' />
          <Photo ImageSrc={photo19} key='photos-photo-2-9' />
          <Photo ImageSrc={photo20} key='photos-photo2--10' />
        </motion.div>
        <motion.div
          key='photos-1-2'
          className={styled.photos}
          initial={{ x: 1450 }}
          animate={{ x: -1850 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo11} key='photos-photo-2-2-1' />
          <Photo ImageSrc={photo12} key='photos-photo-2-2-2' />
          <Photo ImageSrc={photo13} key='photos-photo-2-2-3' />
          <Photo ImageSrc={photo14} key='photos-photo-2-2-4' />
          <Photo ImageSrc={photo15} key='photos-photo-2-2-5' />
          <Photo ImageSrc={photo16} key='photos-photo-2-2-6' />
          <Photo ImageSrc={photo17} key='photos-photo-2-2-7' />
          <Photo ImageSrc={photo18} key='photos-photo-2-2-8' />
          <Photo ImageSrc={photo19} key='photos-photo-2-2-9' />
          <Photo ImageSrc={photo20} key='photos-photo-2-2-10' />
        </motion.div>
      </motion.div>

      <motion.div className={styled.photos} key='photos-div3'>
        <motion.div
          key='photos-3'
          className={styled.photos}
          initial={{ x: 1350 }}
          animate={{ x: -1950 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* first */}

          <Photo ImageSrc={photo21} key='photos-photo-21' />
          <Photo ImageSrc={photo22} key='photos-photo-22' />
          <Photo ImageSrc={photo23} key='photos-photo-23' />
          <Photo ImageSrc={photo24} key='photos-photo-24' />
          <Photo ImageSrc={photo25} key='photos-photo-25' />
          <Photo ImageSrc={photo26} key='photos-photo-26' />
          <Photo ImageSrc={photo27} key='photos-photo-27' />
          <Photo ImageSrc={photo28} key='photos-photo-28' />
          <Photo ImageSrc={photo29} key='photos-photo-29' />
          <Photo ImageSrc={photo30} key='photos-photo-30' />
        </motion.div>
        <motion.div
          className={styled.photos}
          initial={{ x: 1350 }}
          animate={{ x: -1950 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            delay: 0,
            repeatType: "loop",
            repeatDelay: 0,
            ease: "linear",
          }}>
          {/* second */}

          <Photo ImageSrc={photo21} key='photos-photo-2-21' />
          <Photo ImageSrc={photo22} key='photos-photo-2-22' />
          <Photo ImageSrc={photo23} key='photos-photo-2-23' />
          <Photo ImageSrc={photo24} key='photos-photo-2-24' />
          <Photo ImageSrc={photo25} key='photos-photo-2-25' />
          <Photo ImageSrc={photo26} key='photos-photo-2-26' />
          <Photo ImageSrc={photo27} key='photos-photo-2-27' />
          <Photo ImageSrc={photo28} key='photos-photo-2-28' />
          <Photo ImageSrc={photo29} key='photos-photo-2-29' />
          <Photo ImageSrc={photo30} key='photos-photo-2-10' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photos;
