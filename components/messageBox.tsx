import { motion } from "framer-motion";
import styled from "../styles/message.module.css";

function messageBox(props: any) {
  return (
    <>
      <motion.div className={styled.messageBox}>
        <motion.h1>{"test " + props.value}</motion.h1>
      </motion.div>
    </>
  );
}

export default messageBox;
