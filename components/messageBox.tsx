import { motion } from "framer-motion";
import styled from "../styles/message.module.css";

function MessageBox(props: any) {
  return (
    <motion.div className={styled.messageBox}>
      <motion.h1 key='msg-box-name'>{props.value}</motion.h1>
    </motion.div>
  );
}

export default MessageBox;
