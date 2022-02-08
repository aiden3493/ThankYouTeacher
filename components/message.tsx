import styled from "../styles/message.module.css";
import MessageBox from "./messageBox";
import { motion } from "framer-motion";
import Router from "next/router";

function message() {
  const onClick = (name: string) => {
    Router.push(`/message/${name}`);
  };
  return (
    <div className={styled.message}>
      <h1>test</h1>
      <div className={styled.messageBoxes}>
        <motion.div
          layout
          layoutId='KangMinJae'
          onClick={() => onClick("KangMinJae")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='강민재' />
        </motion.div>

        <motion.div
          layout
          layoutId='KimSeungHa'
          onClick={() => onClick("KimSeungHa")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='김승하' />
        </motion.div>

        <motion.div
          layout
          layoutId='MoonSoa'
          onClick={() => onClick("MoonSoa")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='문소아' />
        </motion.div>

        <motion.div
          layout
          layoutId='SungChaeWon'
          onClick={() => onClick("SungChaeWon")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='성채원' />
        </motion.div>

        <motion.div
          layout
          layoutId='ShinWooChan'
          onClick={() => onClick("ShinWooChan")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='신우찬' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes}>
        <motion.div
          layout
          layoutId='AnDaKyung'
          onClick={() => onClick("AnDaKyung")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='안다경' />
        </motion.div>

        <motion.div
          layout
          layoutId='YuDokyung'
          onClick={() => onClick("YuDokyung")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='유도경' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeDongyoung'
          onClick={() => onClick("LeeDongyoung")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이동영' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeSangheon'
          onClick={() => onClick("LeeSangheon")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이상헌' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeSeojung'
          onClick={() => onClick("LeeSeojung")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이서정' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes}>
        <motion.div
          layout
          layoutId='LeeSieun'
          onClick={() => onClick("LeeSieun")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이시은' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeEunwoo'
          onClick={() => onClick("LeeEunwoo")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이은우' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeJungheon'
          onClick={() => onClick("LeeJungheon")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이정헌' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeJaehee'
          onClick={() => onClick("LeeJaehee")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이재희' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeChaekyung'
          onClick={() => onClick("LeeChaekyung")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이채경' />
        </motion.div>
      </div>
      <div className={styled.messageBoxes}>
        <motion.div
          layout
          layoutId='LeeHyunsoo'
          onClick={() => onClick("LeeHyunsoo")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이현수' />
        </motion.div>

        <motion.div
          layout
          layoutId='LeeHaemin'
          onClick={() => onClick("LeeHaemin")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='이해민' />
        </motion.div>

        <motion.div
          layout
          layoutId='ChaeHyerim'
          onClick={() => onClick("ChaeHyerim")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='채혜림' />
        </motion.div>

        <motion.div
          layout
          layoutId='ChoiYeram'
          onClick={() => onClick("ChoiYeram")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='최예람' />
        </motion.div>

        <motion.div
          layout
          layoutId='ChoiJinkyu'
          onClick={() => onClick("ChoiJinkyu")}
          transition={{
            type: "spring",
            bounce: 0.25,
            duration: 0.5,
          }}>
          <MessageBox value='최진규' />
        </motion.div>
      </div>
    </div>
  );
}

export default message;
