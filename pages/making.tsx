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

function Making() {
  return (
    <AnimateSharedLayout>
      <motion.div className={styled.content} layout>
        <motion.h1 layout>제작과정</motion.h1>
        <motion.h3 layout>2022.1.30 - 2022.2.11</motion.h3>
        <motion.h3 layout>
          코드 :{" "}
          <motion.a href='https://github.com/aiden3493/ThankYouTeacher' layout>
            GitHub
          </motion.a>
        </motion.h3>
        <Container
          day='1일차'
          videoCount='2'
          src={[
            "https://www.youtube.com/embed/KXj77zfHRjU",
            "https://www.youtube.com/embed/DeKJWPovmSk",
          ]}
        />
        <Container
          day='2일차'
          videoCount='3'
          src={[
            "https://www.youtube.com/embed/WbwaCOU4tH0",
            "https://www.youtube.com/embed/_Cunk8KL8u4",
            "https://www.youtube.com/embed/FEPKz8fokNI",
          ]}
        />
        <Container
          day='3일차'
          videoCount='4'
          src={[
            "https://www.youtube.com/embed/V8rb6Ygifq8",
            "https://www.youtube.com/embed/CwlH3qnS3sM",
            "https://www.youtube.com/embed/WS2W19jjSxo",
            "https://www.youtube.com/embed/Mn7sh8t3jjI",
          ]}
        />
        <Container
          day='4일차'
          videoCount='1'
          src={["https://www.youtube.com/embed/NGE5jIBnUMY"]}
        />
        <Container
          day='5일차'
          videoCount='1'
          src={["https://www.youtube.com/embed/eKVrIKHDQKM"]}
        />
        <Container
          day='6일차'
          videoCount='1'
          src={["https://www.youtube.com/embed/0VItHVHpjQU"]}
        />
        <Container
          day='7일차'
          videoCount='3'
          src={[
            "https://www.youtube.com/embed/wn0FECTM7gk",
            "https://www.youtube.com/embed/P_OXfoxZ4SQ",
            "https://www.youtube.com/embed/4anSYKtIPA8",
          ]}
        />
        <Container
          day='8일차'
          videoCount='2'
          src={[
            "https://www.youtube.com/embed/jsPfmnicoQ8",
            "https://www.youtube.com/embed/xNn28K_CKqg",
          ]}
        />
        <Container day='9일차 - 작업을 안했습니다' videoCount='0' src={[]} />
        <Container
          day='10일차'
          videoCount='2'
          src={[
            "https://www.youtube.com/embed/Fh9uTslkFT8",
            "https://www.youtube.com/embed/Evw0EZWqFrE",
          ]}
        />
        <Container
          day='11일차'
          videoCount='1'
          src={["https://www.youtube.com/embed/oOwAm9qVHLo"]}
        />
        <Container
          day='12일차'
          videoCount='2'
          src={[
            "https://www.youtube.com/embed/dKgr7w2Wf5I",
            "https://www.youtube.com/embed/615ntdQk2Sw",
          ]}
        />
      </motion.div>
    </AnimateSharedLayout>
  );
}

export default Making;
