import { AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import styled from "../styles/making.module.css";

function Container(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const videoCount = props.videoCount;
  const videoSrc = props.src;
  console.log(videoCount, videoSrc);

  return isOpen ? (
    <motion.div
      layout
      layoutId={`making${props.day}`}
      transition={{ duration: 0.2 }}
      className={styled.container}
      onClick={() => setIsOpen(!isOpen)}
      style={{ height: `${videoCount * 315 + videoCount * 35 + 60}px` }}
      initial={{ borderRadius: "10px", boxShadow: "0px 0px 9px 0px gray" }}>
      <motion.p layout layoutId={`making${props.day}P`}>
        {props.day}
      </motion.p>
      <motion.div
        layout
        className={styled.videoContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        {isOpen
          ? videoSrc.map((src: any) => {
              console.log(src);
              return (
                <motion.iframe
                  style={{ borderRadius: "15px" }}
                  layout
                  key={src}
                  className={styled.video}
                  width='560'
                  height='315'
                  src={src}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></motion.iframe>
              );
            })
          : ""}
      </motion.div>
    </motion.div>
  ) : (
    <motion.div
      layout
      layoutId={`making${props.day}`}
      transition={{ duration: 0.2 }}
      className={styled.container}
      onClick={() => setIsOpen(!isOpen)}
      style={{ height: "60px" }}
      initial={{ borderRadius: "10px", boxShadow: "0px 0px 9px 0px gray" }}>
      <motion.p layout layoutId={`making${props.day}P`}>
        {props.day}
      </motion.p>
    </motion.div>
  );
}

function making() {
  return (
    <AnimateSharedLayout>
      <motion.div className={styled.content} layout>
        <motion.h1 layout>test</motion.h1>
        <Container
          day='1'
          videoCount='1'
          src={["https://www.youtube.com/embed/FrGpmRe5Lzk"]}
        />
        <Container
          day='2'
          videoCount='2'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
          ]}
        />
        <Container
          day='3'
          videoCount='3'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='4'
          videoCount='4'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='5'
          videoCount='5'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='6'
          videoCount='6'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='7'
          videoCount='7'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='8'
          videoCount='8'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
        <Container
          day='9'
          videoCount='9'
          src={[
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/FrGpmRe5Lzk",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/qcL5EVW2fkU",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
            "https://www.youtube.com/embed/9_8qgrHMyEE",
          ]}
        />
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default making;
