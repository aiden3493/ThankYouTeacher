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
      <h1>test</h1>
      <motion.div className={styled.photos}>
        <motion.div
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

          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo6} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo10} />
        </motion.div>
        <motion.div
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

          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo6} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo10} />
        </motion.div>
      </motion.div>

      <motion.div className={styled.photos}>
        <motion.div
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

          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo6} />
          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo10} />
        </motion.div>
        <motion.div
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

          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo6} />
          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo10} />
        </motion.div>
      </motion.div>

      <motion.div className={styled.photos}>
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
          {/* first */}

          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo10} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo6} />
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

          <Photo ImageSrc={photo9} />
          <Photo ImageSrc={photo3} />
          <Photo ImageSrc={photo10} />
          <Photo ImageSrc={photo2} />
          <Photo ImageSrc={photo} />
          <Photo ImageSrc={photo8} />
          <Photo ImageSrc={photo5} />
          <Photo ImageSrc={photo7} />
          <Photo ImageSrc={photo4} />
          <Photo ImageSrc={photo6} />
        </motion.div>
      </motion.div>
      <Link href='/fullPhoto'>
        <motion.button className={styled.Linkbutton}>test</motion.button>
      </Link>
    </div>
  );
}

export default Photos;
