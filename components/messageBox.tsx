import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import styled from "../styles/message.module.css";

function messageBox(props: any) {
  return (
    <motion.div className={styled.messageBox} layout layoutId={props.value}>
      <motion.h1>{props.value}</motion.h1>
    </motion.div>
  );
}

export default messageBox;
